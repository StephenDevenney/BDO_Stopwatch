import { Injectable } from "@angular/core";
import { CategoriesGrouped, Category } from "../../../app/shared/classes/app/category";
import { CategoryContext } from "../sqlContext/categoryContext";

@Injectable()
export class CategoryHandler {

    public constructor(private categoryContext: CategoryContext) {}

    public async getCategories(): Promise<Array<CategoriesGrouped>> {
        let recentCategories = new Array<Category>();
        await this.categoryContext.getMostRecentCategories().then((_ : Array<Category>) => {
            recentCategories = _;
        });

        let groupedCategories = new Array<CategoriesGrouped>();
        if(recentCategories.length > 0)
            groupedCategories.push(new CategoriesGrouped("Recent", recentCategories));


        await this.categoryContext.getAll().then((_ : Array<Category>) => {
            groupedCategories.push(new CategoriesGrouped("Categories", _));
        });

        return groupedCategories;
    }
}