import { Injectable } from '@angular/core';
import { LocationHandler } from '../../../server/src/middleware/locationHandler';
import { TimeSlotHandler } from '../../../server/src/middleware/timeSlotHandler';
import { LocationsGrouped } from '../classes/app/locations';
import { TimeSlot } from '../classes/app/timeSlot';

@Injectable()
export class DatabaseService {
    
    constructor(private locationHandler: LocationHandler,
                private timeSlotHandler: TimeSlotHandler){

    }

    public async addNewEntry(newEntry: TimeSlot): Promise<void> {
        return await this.timeSlotHandler.addNewEntry(newEntry);
    }

    public async getTimeSlots(): Promise<Array<TimeSlot>> {
        return await this.timeSlotHandler.getTimeSlots();
    }

    public async getLocations(): Promise<Array<LocationsGrouped>> {
        return await this.locationHandler.getGroupedLocations();
    }
}