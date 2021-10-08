import { TheDb } from '../thedb';
import { Category } from "../../../app/shared/classes/app/category";
import { TimeSlot } from 'src/app/shared/classes/app/timeSlot';
import { Services } from '../services';

export class TimeSlotContext {
    public dataLogId: number = 0;
    public category: Category = new Category;
    public secs: number = 0;
    public dateCreated: string = "";

        // Add Time Slot
    public async insertTime(entry: TimeSlot): Promise<void> {
        const sql = `INSERT OR REPLACE INTO data_log (FK_categoryId, secs, dateCreated) VALUES ($categoryId, $secs, $dateCreated);`;
        const values = { $categoryId: entry.category.categoryId, $secs: entry.secs, $dateCreated: new Services().getCurrentDate() };
    
        await TheDb.insert(sql, values).then((result) => {});
    }

        // GET TimeSlot
    public async getAll(): Promise<Array<TimeSlot>> {
        const sql = `SELECT dataLogId, enum_category.categoryId, enum_category.categoryName, enum_category.questingCompatible, secs, dateCreated  FROM data_log INNER JOIN enum_category ON enum_category.categoryId == data_log.FK_categoryId ORDER BY dateCreated DESC, dataLogId DESC`;
        const values = {};
            return await TheDb.selectAll(sql, values)
                .then((rows: any) => {
                    const nm: Array<TimeSlot> = new Array<TimeSlot>();
                    for (const row of rows) {
                        const item = new TimeSlotContext().fromRowTimeSlot(row);
                        nm.push(item);
                }
            return nm;
        });
    }

    private fromRowTimeSlot(row: TimeSlot): TimeSlot {
        this.dataLogId = row['dataLogId'];
        this.category.categoryId = row['categoryId'];
        this.category.categoryName = row['categoryName'];
        if(!!row['questingCompatible'])
            this.category.questingCompatible = true;
        this.secs = row['secs'];
        this.dateCreated = row['dateCreated'];
  
        return this;
    }
}