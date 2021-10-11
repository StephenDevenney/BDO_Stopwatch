import { TheDb } from '../thedb';
import { TopFive } from '../../../app/shared/classes/app/overviewData';
import { TopFiveEntity } from '../../../server/entities/topFiveEntity';

export class TopFiveContext {
    private topFiveItems: TopFive = new TopFive;
    
    public getTopFiveLocations(): Promise<Array<TopFive>> {
      const sql = `SELECT enum_locations.locationName as itemName, SUM(secs)as secs, COUNT(locationId) as occurs FROM data_log INNER JOIN enum_locations ON enum_locations.locationId == data_log.FK_locationId INNER JOIN enum_territory ON enum_territory.territoryId == enum_locations.FK_territoryId GROUP BY locationId ORDER BY secs DESC, occurs DESC, dataLogId DESC LIMIT 5`;
      const values = {};
    
      return TheDb.selectAll(sql, values).then((rows: any) => {
        let nm: Array<TopFive> = new Array<TopFive>();
        for (const row of rows) {
          nm.push(new TopFiveContext().fromRow(row));
        }
        return nm;
      });
    }

    public getTopFiveTerritories(): Promise<Array<TopFive>> {
      const sql = `SELECT enum_territory.territoryName as itemName, SUM(secs)as secs, COUNT(locationId) as occurs FROM data_log INNER JOIN enum_locations ON enum_locations.locationId == data_log.FK_locationId INNER JOIN enum_territory ON enum_territory.territoryId == enum_locations.FK_territoryId GROUP BY territoryId ORDER BY secs DESC, occurs DESC, dataLogId DESC LIMIT 5`;
      const values = {};
    
      return TheDb.selectAll(sql, values).then((rows: any) => {
        let nm: Array<TopFive> = new Array<TopFive>();
        for (const row of rows) {
          nm.push(new TopFiveContext().fromRow(row));
        }
        return nm;
      });
    }
    
    private fromRow(row: TopFiveEntity): TopFive {
      this.topFiveItems.itemName = row['itemName'];
      this.topFiveItems.secs = row['secs'];
      this.topFiveItems.occurs = row['occurs'];
      return this.topFiveItems;
    }
}