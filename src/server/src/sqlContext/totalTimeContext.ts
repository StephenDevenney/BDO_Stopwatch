import { TheDb } from '../thedb';
import { TimeData } from '../../../app/shared/classes/app/overviewData';

export class TotalTimeContext {
    public average: number = 0;
    public month: number = 0;
    public week: number = 0;
    public today: number = 0;
    
    public getData(): Promise<TimeData> {
      const sql = ``;
      const values = {};
    
      return TheDb.selectAll(sql, values).then((rows: any) => {
        let nm: TimeData = new TimeData();
        for (const row of rows) {
          nm = new TotalTimeContext().fromRow(row);
        }
        return nm;
      });
    }
    
      private fromRow(row: TimeData): TimeData {
        this.average = row['average'];
        this.month = row['month'];
        this.week = row['week'];
        this.today = row['today'];
      
        return this;
      }
}