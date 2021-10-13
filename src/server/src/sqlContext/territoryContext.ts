import { TheDb } from '../thedb';
import { Territory } from "../../../app/shared/classes/app/locations";
import { TerritoryEntity } from '../../../server/entities/territoryEntity';

export class TerritoryContext {
  private territory: Territory = new Territory;
  
  public async getAll(): Promise<Array<Territory>> {
    const sql = `SELECT * FROM enum_territory`;
    const values = {};

    return await TheDb.selectAll(sql, values).then((rows: any) => {
      const nm: Array<Territory> = new Array<Territory>();
      for (const row of rows) {
        const item = new TerritoryContext().fromRow(row);
        nm.push(item);
      }
      return nm;
    });
  }

  public async getInUse(): Promise<Array<Territory>> {
    const sql = `SELECT territoryId, territoryName FROM enum_territory INNER JOIN enum_locations ON enum_locations.FK_territoryId == enum_territory.territoryId INNER JOIN data_log ON data_log.FK_locationId == enum_locations.locationId GROUP BY territoryId ORDER BY territoryId`;
    const values = {};

    return await TheDb.selectAll(sql, values).then((rows: any) => {
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