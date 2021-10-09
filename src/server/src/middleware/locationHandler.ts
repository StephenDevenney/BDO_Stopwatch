import { Injectable } from "@angular/core";
import { LocationsGrouped, Location, Territory } from "../../../app/shared/classes/app/locations";
import { LocationContext, TerritoryContext } from "../sqlContext/locationContext";

@Injectable()
export class LocationHandler {

    public constructor(private locationContext: LocationContext,
                        private territoryContext: TerritoryContext) {}

    public async getGroupedLocations(): Promise<Array<LocationsGrouped>> {
        let locationViewModel = new Array<Location>();
        await this.locationContext.getMostRecent().then((_: Array<Location>) => {
            if(_.length > 0) {
                _.forEach(row => {
                    locationViewModel.push(new Location(row.locationId, row.territoryId, row.locationName, row.territoryName, row.recommendedLevel, row.recommendedAP, row.afuaruSpawnable));
                });
            } 
        });

        let locationNamesEnum = new Array<LocationsGrouped>();
        if(locationViewModel.length > 0)
            locationNamesEnum.push(new LocationsGrouped("Recent", locationViewModel));

        let locationArray = await this.locationContext.getAll();
        await this.territoryContext.getAll().then((_: Array<Territory>) => {
            _.forEach(row => {
                let locations = new Array<Location>();
                locationArray.filter((_: Location) => _.territoryId == row.territoryId).forEach(_ => {
                    locations.push(new Location(_.locationId, _.territoryId, _.locationName, _.territoryName, _.recommendedLevel, _.recommendedAP, _.afuaruSpawnable));
                });
                locationNamesEnum.push(new LocationsGrouped(row.territoryName, locations));
            });
        });

        return locationNamesEnum;
    }
}