import { TheDb } from '../thedb';
import { Territory } from "../../../app/shared/classes/app/locations";

export class TerritoryContext {
  public territoryId: number = 0;
  public territoryName: string = "";
  
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
  
  private fromRow(row: Territory): Territory {
    this.territoryId = row['territoryId'];
    this.territoryName = row['territoryName'];
  
    return this;
  }
}