import { TheDb } from '../thedb';
import { TimeData, TimeDataNumbers } from '../../../app/shared/classes/app/overviewData';

export class TotalTimeContext {
    private timeData: Array<TimeData> = new Array<TimeData>();
    
    public async getData(todaysDate: string, weekStartDate: string, monthStartDate: string, yearStartDate: string): Promise<Array<TimeData>> {
      const sql = `SELECT ROUND(AVG(secs), 2) AS average FROM data_log AS t1 UNION ALL SELECT SUM(secs) AS today FROM data_log AS t2 WHERE t2.dateCreated == $todaysDate UNION ALL SELECT SUM(secs) AS week FROM data_log AS t3 WHERE t3.dateCreated BETWEEN $weekStartDate AND $todaysDate UNION ALL SELECT SUM(secs) AS month FROM data_log AS t4 WHERE t4.dateCreated BETWEEN $monthStartDate AND $todaysDate UNION ALL SELECT SUM(secs) AS year FROM data_log AS t5 WHERE t5.dateCreated BETWEEN $yearStartDate AND $todaysDate UNION ALL SELECT SUM(secs) AS total FROM data_log AS t6`;
      const values = { $todaysDate: todaysDate, $weekStartDate: weekStartDate, $monthStartDate: monthStartDate, $yearStartDate: yearStartDate };
    
      return await TheDb.selectAll(sql, values).then((rows: any) => {
        let nm: Array<number> = new Array<number>();
        for (const row of rows) {
          nm.push(new TotalTimeContext().fromRow(row));
        }

        if(nm[5] != null)
          this.timeData.push(new TimeData("Total", nm[5]));

        if(nm[3] != null)
          this.timeData.push(new TimeData("Month", nm[3]));

        if(nm[2] != null)
          this.timeData.push(new TimeData("Week", nm[2]));

        if(nm[1] != null)
          this.timeData.push(new TimeData("Today", nm[1]));

        if(nm[0] != null)
          this.timeData.push(new TimeData("Average", nm[0]));

        if(nm[4] != null)
          this.timeData.push(new TimeData("Year", nm[4]));

        return this.timeData;
      });
    }
    
      private fromRow(row: TimeDataNumbers): number {
        return row.average;
      }
}