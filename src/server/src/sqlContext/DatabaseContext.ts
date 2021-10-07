import { TheDb } from '../thedb';
import { Category } from "../../../app/shared/classes/app/category";
import { TimeSlot } from 'src/app/shared/classes/app/timeSlot';
import { Services } from '../services';

export class DatabaseContext {
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
                    const item = new DatabaseContext().fromRowCategory(row);
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
              const item = new DatabaseContext().fromRowCategory(row);
              nm.push(item);
          }
          return nm;
        });
      }
  
    private fromRowCategory(row: Category): Category {
        this.categoryId = row['categoryId'];
        this.categoryName = row['categoryName'];
        if(!!row['questingCompatible'])
            this.questingCompatible = true;
  
        return this;
    }

        // Add Time Slot
    public async insertTime(entry: TimeSlot): Promise<void> {
        const sql = `INSERT OR REPLACE INTO data_log (FK_categoryId, secs, dateCreated) VALUES ($categoryId, $secs, $dateCreated);`;
        const values = { $categoryId: entry.category.categoryId, $secs: entry.secs, $dateCreated: new Services().getCurrentDate() };
    
        await TheDb.insert(sql, values).then((result) => {});
    }
}