import { Injectable } from "@angular/core";
import { LocationsGrouped, Territory, Location } from "../../../app/shared/classes/app/locations";
import { TimeSlot } from "../../../app/shared/classes/app/timeSlot";
import { LocationContext } from "../sqlContext/locationContext";
import { TerritoryContext } from "../sqlContext/territoryContext";
import { TimeSlotContext } from "../sqlContext/timeSlotContext";

@Injectable()
export class TimeSlotHandler {

    public constructor(private timeSlotContext: TimeSlotContext,
                        private locationContext: LocationContext,
                        private territoryContext: TerritoryContext) {}

    public async addNewEntry(newEntry: TimeSlot): Promise<void> {
        await this.timeSlotContext.insertTime(newEntry);
    }

    public async getTimeSlots(): Promise<Array<TimeSlot>> {
        let timeSlots = new Array<TimeSlot>();
        await this.timeSlotContext.getAll().then((_ : Array<TimeSlot>) => {
            timeSlots = _;
        });

        return timeSlots;
    }

    public async getGroupedLocations(): Promise<Array<LocationsGrouped>> {
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

        let locationArray = await this.locationContext.getAll();
        await this.territoryContext.getAll().then((_: Array<Territory>) => {
            _.forEach(row => {
                let locations = new Array<Location>();
                locationArray.filter((_: Location) => _.territory.territoryId == row.territoryId).forEach(_ => {
                    locations.push(new Location(_.locationId, _.locationName, _.territory, _.recommendedLevel, _.recommendedAP, _.afuaruSpawnable));
                });
                locationNamesEnum.push(new LocationsGrouped(row.territoryName, locations));
            });
        });

        return locationNamesEnum;
    }
}