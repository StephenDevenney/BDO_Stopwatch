import { TheDb } from '../thedb';
import { Territory } from "../../../app/shared/classes/app/locations";
import { TerritoryEntity } from '../../../server/entities/territoryEntity';

export class TerritoryContext {
  private territory: Territory = new Territory;
  
  public getAll(): Promise<Array<Territory>> {
    const sql = `SELECT * FROM enum_territory WHERE territoryId != 1`;
    const values = {};

    return TheDb.selectAll(sql, values).then((rows: any) => {
      const nm: Array<Territory> = new Array<Territory>();
      for (const row of rows) {
        const item = new TerritoryContext().fromRow(row);
        nm.push(item);
      }
      return nm;
    });
  }
  
  private fromRow(row: TerritoryEntity): Territory {
    this.territory.territoryId = row['territoryId'];
    this.territory.territoryName = row['territoryName'];
  
    return this.territory;
  }
}