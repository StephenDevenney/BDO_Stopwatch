import { TheDb } from '../thedb';
import { Category } from "../../../app/shared/classes/app/category";

export class CategoryContext {
    public categoryId: number = 0;
    public categoryName: string = "";
    public questingCompatible: boolean = false;
  
        // GET Category
    public async getAll(): Promise<Array<Category>> {
      const sql = `SELECT categoryId, categoryName, questingCompatible FROM enum_category`;
      const values = {};
  
        return await TheDb.selectAll(sql, values)
            .then((rows: any) => {
                const nm: Array<Category> = new Array<Category>();
                for (const row of rows) {
                    const item = new CategoryContext().fromRow(row);
                    nm.push(item);
            }
            return nm;
        });
    }

        // Get Most Recent Categories
    public getMostRecentCategories(): Promise<Array<Category>> {
        const sql = `SELECT DISTINCT enum_category.categoryId, enum_category.categoryName, enum_category.questingCompatible FROM data_log INNER JOIN enum_category ON enum_category.categoryId = data_log.FK_categoryId ORDER BY dataLogId DESC LIMIT 2`;
        const values = {};
    
        return TheDb.selectAll(sql, values).then((rows: any) => {
          const nm: Array<Category> = new Array<Category>();
          for (const row of rows) {
              const item = new CategoryContext().fromRow(row);
              nm.push(item);
          }
          return nm;
        });
      }
  
    private fromRow(row: Category): Category {
        this.categoryId = row['categoryId'];
        this.categoryName = row['categoryName'];
        if(!!row['questingCompatible'])
            this.questingCompatible = true;
  
        return this;
    }
}