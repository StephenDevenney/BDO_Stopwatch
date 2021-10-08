import { Injectable } from '@angular/core';
import { CategoryHandler } from '../../../server/src/middleware/categoryHandler';
import { TimeSlotHandler } from '../../../server/src/middleware/timeSlotHandler';
import { CategoriesGrouped } from '../classes/app/category';
import { TimeSlot } from '../classes/app/timeSlot';

@Injectable()
export class DatabaseService {
    
    constructor(private categoryHandler: CategoryHandler,
                private timeSlotHandler: TimeSlotHandler){

    }

    public async addNewEntry(newEntry: TimeSlot, addToQuestingTime: boolean): Promise<void> {
        return await this.timeSlotHandler.addNewEntry(newEntry, addToQuestingTime);
    }

    public async getTimeSlots(): Promise<Array<TimeSlot>> {
        return await this.timeSlotHandler.getTimeSlots();
    }

    public async getCategories(): Promise<Array<CategoriesGrouped>> {
        return await this.categoryHandler.getCategories();
    }
}