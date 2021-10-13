import { TheDb } from '../thedb';
import { LocationStats, RegionStats, TerritoryStats } from '../../../app/shared/classes/app/overviewData';
import { LocationStatsEntity } from '../../../server/entities/locationStatsEntity';
import { Location } from '../../../app/shared/classes/app/locations';

export class LocationStatsContext {
    private locationStatsOverview: RegionStats = new RegionStats;
    private locationStats: LocationStats = new LocationStats;
    private territoryStats: TerritoryStats = new TerritoryStats;
  
        // GET Locations
    public async geLocationData(loc: Location): Promise<RegionStats> {

        const sqlLocations = `SELECT enum_locations.locationId, enum_locations.locationName, SUM(secs)as locationSecs, COUNT(enum_locations.locationId) as locationOccurs, enum_locations.recommendedLevel, enum_locations.recommendedAP, enum_locations.afuaruSpawnable FROM data_log INNER JOIN enum_locations ON enum_locations.locationId == data_log.FK_locationId WHERE enum_locations.locationId == $locId GROUP BY locationId ORDER BY locationSecs DESC, locationOccurs DESC, dataLogId`;
        const valuesLocations = { $locId: loc.locationId };
        await TheDb.selectAll(sqlLocations, valuesLocations).then((rows: any) => {
            const nm: RegionStats = new RegionStats;
            for (const row of rows) {
                nm.location = new LocationStatsContext().fromRowLocation(row);
            }
            this.locationStatsOverview.location = nm.location;
        });

        const sqlTerritorries = `SELECT enum_territory.territoryId, enum_territory.territoryName, SUM(secs)as territorySecs, COUNT(enum_territory.territoryId) as territoryOccurs FROM data_log INNER JOIN enum_locations ON enum_locations.locationId == data_log.FK_locationId INNER JOIN enum_territory ON enum_territory.territoryId == enum_locations.FK_territoryId WHERE enum_territory.territoryId == $terId GROUP BY territoryId ORDER BY territorySecs DESC, territoryOccurs DESC, dataLogId`;
        const valuesTerritorries = { $terId: loc.territory.territoryId };
        await TheDb.selectAll(sqlTerritorries, valuesTerritorries).then((rows: any) => {
            const nm: RegionStats = new RegionStats;
            for (const row of rows) {
                nm.territory = new LocationStatsContext().fromRowTerritory(row);
            }
            this.locationStatsOverview.territory = nm.territory;
        });

        return this.locationStatsOverview;
    } 
  
    private fromRowLocation(row: LocationStatsEntity): LocationStats {
        this.locationStats.locationId = row['locationId'];
        this.locationStats.locationName = row['locationName'];
        this.locationStats.locationSecs = row['locationSecs'];
        this.locationStats.locationOccurs = row['locationOccurs'];
        this.locationStats.recommendedLevel = row['recommendedLevel'];
        this.locationStats.recommendedAP = row['recommendedAP'];
        if(!!row['afuaruSpawnable'])
          this.locationStats.afuaruSpawnable = true;
      
        return this.locationStats;
    }

    private fromRowTerritory(row: LocationStatsEntity): TerritoryStats {
        this.territoryStats.territoryId = row['territoryId'];
        this.territoryStats.territoryName = row['territoryName'];
        this.territoryStats.territorySecs = row['territorySecs'];
        this.territoryStats.territoryOccurs = row['territoryOccurs'];
      
        return this.territoryStats;
    }
}