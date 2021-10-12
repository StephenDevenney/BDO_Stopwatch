import { Injectable } from "@angular/core";
import { LocationStatsOverview, OverviewData, TopFive } from "../../../app/shared/classes/app/overviewData";
import { LocationContext } from "../sqlContext/locationContext";
import { LocationStatsContext } from "../sqlContext/locationStatsContext";
import { TerritoryContext } from "../sqlContext/territoryContext";
import { TimeSlotContext } from "../sqlContext/timeSlotContext";
import { TopFiveContext } from "../sqlContext/topFiveContext";
import { TotalTimeContext } from "../sqlContext/totalTimeContext";

@Injectable()
export class OverviewDataHandler {

    constructor(private timeSlotContext: TimeSlotContext,
                        private totalTimeContext: TotalTimeContext,
                        private topFiveContext: TopFiveContext,
                        private locationStatsContext: LocationStatsContext) {}

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
        await this.locationStatsContext.getAll().then((loc: LocationStatsOverview) => {
            overviewData.allLocations = loc;
        });
        // get timeData (Overall)

        return overviewData;
    }
}