import { Injectable } from "@angular/core";
import { Category } from "../../../app/shared/classes/app/category";
import { DatabaseContext } from "../sqlContext/DatabaseContext";

@Injectable()
export class DatabaseHandler {

    public constructor(private databaseContext: DatabaseContext) {}

    public async addNewEntry(): Promise<void> {
        
    }

    public async getCategories(): Promise<Array<Category>> {
        let cdb = new Array<Category>();
        await this.databaseContext.getAll().then((_ : Array<Category>) => {
            cdb = _;
        });
        return cdb;
    }

    public async getOverviewData(): Promise<void> {
        
    }
}