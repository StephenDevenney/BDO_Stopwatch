import { TheDb } from '../thedb';
import { Location, Territory } from "../../../app/shared/classes/app/locations";
import { LocationEntity } from '../../entities/locationEntity';

export class LocationContext {
    private location: Location = new Location;
  
        // GET Locations
    public async getAll(): Promise<Array<Location>> {
        const sql = `SELECT enum_locations.locationId, enum_territory.territoryId, enum_locations.locationName, enum_territory.territoryName, enum_locations.recommendedLevel, enum_locations.recommendedAP, enum_locations.afuaruSpawnable FROM enum_locations INNER JOIN enum_territory ON enum_territory.territoryId = enum_locations.FK_territoryId`;
        const values = {};
    
        return await TheDb.selectAll(sql, values).then((rows: any) => {
            const nm: Array<Location> = new Array<Location>();
            for (const row of rows) {
            const item = new LocationContext().fromRow(row);
            nm.push(item);
            }
            return nm;
        });
    }

        // Get Most Recent Locations
    public async getMostRecent(): Promise<Array<Location>> {
        const sql = `SELECT DISTINCT enum_locations.locationId, enum_territory.territoryId, enum_locations.locationName, enum_territory.territoryName, enum_locations.recommendedLevel, enum_locations.recommendedAP, enum_locations.afuaruSpawnable FROM data_log INNER JOIN enum_locations ON enum_locations.locationId = FK_locationId INNER JOIN enum_territory ON enum_territory.territoryId = enum_locations.FK_territoryId ORDER BY dataLogId DESC LIMIT 3`;
        const values = {};
    
        return await TheDb.selectAll(sql, values).then((rows: any) => {
            const nm: Array<Location> = new Array<Location>();
            for (const row of rows) {
                const item: Location = new LocationContext().fromRow(row);
                nm.push(item);
            }
            return nm;
        });
    }

        // Get Locations With TimeStamps
    public async getInUse() {
        const sql = `SELECT enum_locations.locationId, enum_territory.territoryId, enum_locations.locationName, enum_territory.territoryName, enum_locations.recommendedLevel, enum_locations.recommendedAP, enum_locations.afuaruSpawnable FROM enum_locations INNER JOIN enum_territory ON enum_territory.territoryId = enum_locations.FK_territoryId INNER JOIN data_log ON data_log.FK_locationId == enum_locations.locationId GROUP BY locationId ORDER BY locationId`;
        const values = {};
    
        return await TheDb.selectAll(sql, values).then((rows: any) => {
            const nm: Array<Location> = new Array<Location>();
            for (const row of rows) {
            const item = new LocationContext().fromRow(row);
            nm.push(item);
            }
            return nm;
        });
    }
    
  
    private fromRow(row: LocationEntity): Location {
        this.location.locationId = row['locationId'];
        this.location.locationName = row['locationName'];
        this.location.territory = new Territory(row['territoryId'], row['territoryName']);
        this.location.recommendedLevel = row['recommendedLevel'];
        this.location.recommendedAP = row['recommendedAP'];
        if(!!row['afuaruSpawnable'])
          this.location.afuaruSpawnable = true;
      
        return this.location;
    }
}