import { Injectable } from '@angular/core';
import { DatabaseHandler } from 'src/server/src/middleware/databaseHandler';
import { CategoriesGrouped, Category } from '../classes/app/category';
import { TimeSlot } from '../classes/app/timeSlot';

@Injectable()
export class DatabaseService {
    
    constructor(private databaseHandler: DatabaseHandler){

    }

    public async addNewEntry(newEntry: TimeSlot, addToQuestingTime: boolean): Promise<void> {
        return await this.databaseHandler.addNewEntry(newEntry, addToQuestingTime);
    }

    public async getCategories(): Promise<Array<CategoriesGrouped>> {
        return await this.databaseHandler.getCategories();
    }

    public async getOverviewData(): Promise<void> {
        return await this.databaseHandler.getOverviewData();
    }
}