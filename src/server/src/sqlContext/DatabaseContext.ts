import { TheDb } from '../thedb';
import { Category } from "../../../app/shared/classes/app/category";

export class DatabaseContext {
    public categoryId: number = 0;
    public categoryName: string = "";
    public questingCompatible: boolean = false;
  
    // GET Category
    public getAll(): Promise<Array<Category>> {
      const sql = `SELECT categoryId, categoryName, questingCompatible FROM enum_category`;
      const values = {};
  
      return TheDb.selectAll(sql, values)
          .then((rows: any) => {
              const nm: Array<Category> = new Array<Category>();
              for (const row of rows) {
                  const item = new DatabaseContext().fromRow(row);
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