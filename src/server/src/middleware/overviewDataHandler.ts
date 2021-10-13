import { Injectable } from "@angular/core";
import { OverviewData, RegionStats, TimeData, TopFive } from "../../../app/shared/classes/app/overviewData";
import { TopFiveContext } from "../sqlContext/topFiveContext";
import { TotalTimeContext } from "../sqlContext/totalTimeContext";
import { Services } from "../../../app/shared/services/services";
import { Location, LocationsGrouped, Territory } from "../../../app/shared/classes/app/locations";
import { LocationStatsContext } from "../sqlContext/locationStatsContext";
import { LocationContext } from "../sqlContext/locationContext";
import { TerritoryContext } from "../sqlContext/territoryContext";

@Injectable()
export class OverviewDataHandler {

    constructor(private totalTimeContext: TotalTimeContext,
                private topFiveContext: TopFiveContext,
                private locationStatsContext: LocationStatsContext,
                private locationContext: LocationContext,
                private territoryContext: TerritoryContext,
                private services: Services) {}

    public async getOverviewData(): Promise<OverviewData> {
        let overviewData: OverviewData = new OverviewData;

            // get topLocations
        await this.topFiveContext.getTopFiveLocations().then((topFiveLocations: Array<TopFive>) => {
            overviewData.topLocations = topFiveLocations;
        });

            // get topTerritories
        await this.topFiveContext.getTopFiveTerritories().then((topFiveTerritories: Array<TopFive>) => {
            overviewData.topTerritories = topFiveTerritories;
        });

            // get allLocations
        let locationViewModel = new Array<Location>();
        await this.locationContext.getMostRecent().then((_: Array<Location>) => {
            if(_.length > 0) {
                _.forEach(row => {
                    locationViewModel.push(new Location(row.locationId, row.locationName, row.territory, row.recommendedLevel, row.recommendedAP, row.afuaruSpawnable));
                });
            } 
        });

        let locationNamesEnum = new Array<LocationsGrouped>();
        if(locationViewModel.length > 0)
            locationNamesEnum.push(new LocationsGrouped("Recent", locationViewModel));

        let locationArray = await this.locationContext.getInUse();
        await this.territoryContext.getInUse().then((_: Array<Territory>) => {
            _.forEach(row => {
                let locations = new Array<Location>();
                locationArray.filter((_: Location) => _.territory.territoryId == row.territoryId).forEach(_ => {
                    locations.push(new Location(_.locationId, _.locationName, _.territory, _.recommendedLevel, _.recommendedAP, _.afuaruSpawnable));
                });
                locationNamesEnum.push(new LocationsGrouped(row.territoryName, locations));
            });
        });

        overviewData.allLocations = locationNamesEnum;

            // get timeData (Overall)
        await this.totalTimeContext.getData(this.services.getCurrentDate(), this.services.getWeekStartDate(), this.services.getMonthStartDate(), this.services.getYearStartDate()).then((totals: Array<TimeData>) => {
            overviewData.totalTime = totals;
        });
        
        return overviewData;
    }

    public async getLocationStats(loc: Location): Promise<RegionStats> { 
        return await this.locationStatsContext.geLocationData(loc);
    }
}