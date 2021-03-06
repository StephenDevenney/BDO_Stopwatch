import { Injectable } from '@angular/core';
import { OverviewDataHandler } from '../../../server/src/middleware/overviewDataHandler';
import { TimeSlotHandler } from '../../../server/src/middleware/timeSlotHandler';
import { Location, LocationsGrouped } from '../classes/app/locations';
import { OverviewData, RegionStats } from '../classes/app/overviewData';
import { TimeSlot } from '../classes/app/timeSlot';

@Injectable()
export class DatabaseService {
    
    constructor(private overviewDataHandler: OverviewDataHandler,
                private timeSlotHandler: TimeSlotHandler){

    }

    public async addNewEntry(newEntry: TimeSlot): Promise<void> {
        return await this.timeSlotHandler.addNewEntry(newEntry);
    }

    public async getOverviewData(): Promise<OverviewData> {
        return await this.overviewDataHandler.getOverviewData();
    }

    public async getLocations(): Promise<Array<LocationsGrouped>> {
        return await this.timeSlotHandler.getGroupedLocations();
    }

    public async getLocationData(loc: Location): Promise<RegionStats> {
        return await this.overviewDataHandler.getLocationStats(loc);
    }
}