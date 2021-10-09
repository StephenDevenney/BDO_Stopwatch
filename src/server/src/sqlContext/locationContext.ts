import { TheDb } from '../thedb';
import { Location, Territory } from "../../../app/shared/classes/app/locations";

export class LocationContext {
    public locationId: number = 1;
    public territoryId: number = 1;
    public locationName: string = "-";
    public territoryName: string = "-";
    public recommendedLevel: string = "";
    public recommendedAP: string = "";
    public afuaruSpawnable: boolean = false;
    public locationCount: number = 0;
  
        // GET Locations
    public getAll(): Promise<Array<Location>> {
        const sql = `SELECT enum_locations.locationId, enum_territory.territoryId, enum_locations.locationName, enum_territory.territoryName, enum_locations.recommendedLevel, enum_locations.recommendedAP, enum_locations.afuaruSpawnable FROM enum_locations INNER JOIN enum_territory ON enum_territory.territoryId = enum_locations.FK_territoryId`;
        const values = {};
    
        return TheDb.selectAll(sql, values).then((rows: any) => {
            const nm: Array<Location> = new Array<Location>();
            for (const row of rows) {
            const item = new LocationContext().fromRow(row);
            nm.push(item);
            }
            return nm;
        });
    }

    public getLocationCount() {
        const sql = `SELECT enum_locations.locationId, enum_locations.locationName, COUNT(enum_locations.locationId) AS locationCount FROM data_log INNER JOIN enum_locations ON enum_locations.locationId = data_log.FK_locationId GROUP BY enum_locations.locationId ORDER BY locationCount DESC, enum_locations.locationId LIMIT 3`;
        const values = {};
    
        return TheDb.selectAll(sql, values).then((rows: any) => {
          const nm: Array<Location> = new Array<Location>();
          for (const row of rows) {
              const item = new LocationContext().fromRow(row);
              nm.push(item);
          }
          return nm;
        });
    }

    public getTerritoryCount() {
        const sql = `SELECT enum_territory.territoryId, enum_territory.territoryName, COUNT(enum_territory.territoryId) AS locationCount FROM data_log INNER JOIN enum_locations ON enum_locations.locationId = data_log.FK_locationId INNER JOIN enum_territory ON enum_territory.territoryId = enum_locations.FK_territoryId GROUP BY enum_territory.territoryId ORDER BY locationCount DESC, enum_territory.territoryId LIMIT 3`;
        const values = {};
    
        return TheDb.selectAll(sql, values).then((rows: any) => {
          const nm: Array<Location> = new Array<Location>();
          for (const row of rows) {
              const item = new LocationContext().fromRow(row);
              nm.push(item);
          }
          return nm;
        });
    }

        // Get Most Recent Locations
    public getMostRecent(): Promise<Array<Location>> {
        const sql = `SELECT DISTINCT enum_locations.locationId, enum_territory.territoryId, enum_locations.locationName, enum_territory.territoryName, enum_locations.recommendedLevel, enum_locations.recommendedAP, enum_locations.afuaruSpawnable FROM data_log INNER JOIN enum_locations ON enum_locations.locationId = FK_locationId INNER JOIN enum_territory ON enum_territory.territoryId = enum_locations.FK_territoryId ORDER BY dataLogId DESC LIMIT 3`;
        const values = {};
    
        return TheDb.selectAll(sql, values).then((rows: any) => {
            const nm: Array<Location> = new Array<Location>();
            for (const row of rows) {
                const item = new LocationContext().fromRow(row);
                nm.push(item);
            }
            return nm;
        });
    }
    
  
    private fromRow(row: Location): Location {
        this.locationId = row['locationId'];
        this.territoryId = row['territoryId'];
        this.locationName = row['locationName'];
        this.territoryName = row['territoryName'];
        this.recommendedLevel = row['recommendedLevel'];
        this.recommendedAP = row['recommendedAP'];
        if(!!row['afuaruSpawnable'])
          this.afuaruSpawnable = true;
        this.locationCount = row['locationCount'];
      
        return this;
    }
}

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