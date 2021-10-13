import { TheDb } from '../thedb';
import { TimeData } from '../../../app/shared/classes/app/overviewData';

export class TotalTimeContext {
    private timeData: TimeData = new TimeData;
    
    public getData(todaysDate: string, weekStartDate: string, monthStartDate: string, yearStartDate: string): Promise<TimeData> {
      const sql = `SELECT ROUND(AVG(secs), 2) AS average FROM data_log AS t1 UNION ALL SELECT SUM(secs) AS today FROM data_log AS t2 WHERE t2.dateCreated == $todaysDate UNION ALL SELECT SUM(secs) AS week FROM data_log AS t3 WHERE t3.dateCreated BETWEEN $weekStartDate AND $todaysDate UNION ALL SELECT SUM(secs) AS month FROM data_log AS t4 WHERE t4.dateCreated BETWEEN $monthStartDate AND $todaysDate UNION ALL SELECT SUM(secs) AS year FROM data_log AS t5 WHERE t5.dateCreated BETWEEN $yearStartDate AND $todaysDate UNION ALL SELECT SUM(secs) AS total FROM data_log AS t6`;
      const values = { $todaysDate: todaysDate, $weekStartDate: weekStartDate, $monthStartDate: monthStartDate, $yearStartDate: yearStartDate };
    
      return TheDb.selectAll(sql, values).then((rows: any) => {
        let nm: Array<number> = new Array<number>();
        for (const row of rows) {
          nm.push(new TotalTimeContext().fromRow(row));
        }
        this.timeData.average = nm[0];
        this.timeData.today = nm[1];
        this.timeData.week = nm[2];
        this.timeData.month = nm[3];
        this.timeData.year = nm[4];
        this.timeData.total = nm[5];

        return this.timeData;
      });
    }
    
      private fromRow(row: TimeData): number {
      
        return row.average;
      }
}