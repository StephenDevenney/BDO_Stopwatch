import { Injectable } from "@angular/core";
import { TimeSlot } from "src/app/shared/classes/app/timeSlot";
import { CategoriesGrouped, Category } from "../../../app/shared/classes/app/category";
import { DatabaseContext } from "../sqlContext/DatabaseContext";

@Injectable()
export class DatabaseHandler {

    public constructor(private databaseContext: DatabaseContext) {}

    public async addNewEntry(newEntry: TimeSlot, addToQuestingTime: boolean): Promise<void> {
        let temp: Category = newEntry.category;
        if(addToQuestingTime) {
            newEntry.category = new Category(7, "Questing", false);
            await this.databaseContext.insertTime(newEntry);
        }
        newEntry.category = temp;
        await this.databaseContext.insertTime(newEntry);
    }

    public async getCategories(): Promise<Array<CategoriesGrouped>> {
        let recentCategories = new Array<Category>();
        await this.databaseContext.getMostRecentCategories().then((_ : Array<Category>) => {
            recentCategories = _;
        });

        let groupedCategories = new Array<CategoriesGrouped>();
        if(recentCategories.length > 0)
            groupedCategories.push(new CategoriesGrouped("Recent", recentCategories));


        await this.databaseContext.getAll().then((_ : Array<Category>) => {
            groupedCategories.push(new CategoriesGrouped("Categories", _));
        });

        return groupedCategories;
    }

    public async getOverviewData(): Promise<void> {
        
    }
}