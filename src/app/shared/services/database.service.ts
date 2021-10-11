import { Injectable } from '@angular/core';
import { OverviewDataHandler } from '../../../server/src/middleware/overviewDataHandler';
import { TimeSlotHandler } from '../../../server/src/middleware/timeSlotHandler';
import { LocationsGrouped } from '../classes/app/locations';
import { TimeSlot } from '../classes/app/timeSlot';

@Injectable()
export class DatabaseService {
    
    constructor(private overviewDataHandler: OverviewDataHandler,
                private timeSlotHandler: TimeSlotHandler){

    }

    public async addNewEntry(newEntry: TimeSlot): Promise<void> {
        return await this.timeSlotHandler.addNewEntry(newEntry);
    }

    public async getOverviewData(): Promise<void> {
        return await this.overviewDataHandler.getOverviewData();
    }

    public async getLocations(): Promise<Array<LocationsGrouped>> {
        return await this.timeSlotHandler.getGroupedLocations();
    }
}