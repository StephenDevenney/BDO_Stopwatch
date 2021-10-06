import { Injectable } from '@angular/core';
import { DatabaseHandler } from 'src/server/src/middleware/databaseHandler';
import { Category } from '../classes/app/category';

@Injectable()
export class DatabaseService {
    
    constructor(private databaseHandler: DatabaseHandler){

    }

    public async addNewEntry(): Promise<void> {
        return await this.databaseHandler.addNewEntry();
    }

    public async getCategories(): Promise<Array<Category>> {
        return await this.databaseHandler.getCategories();
    }

    public async getOverviewData(): Promise<void> {
        return await this.databaseHandler.getOverviewData();
    }
}