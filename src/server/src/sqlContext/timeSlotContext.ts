import { TheDb } from '../thedb';
import { Location } from "../../../app/shared/classes/app/locations";
import { TimeSlot } from '../../../app/shared/classes/app/timeSlot';
import { Services } from '../../../app/shared/services/services';

export class TimeSlotContext {
    public dataLogId: number = 0;
    public location: Location = new Location;
    public secs: number = 0;
    public dateCreated: string = "";

        // Add Time Slot
    public async insertTime(entry: TimeSlot): Promise<void> {
        const sql = `INSERT OR REPLACE INTO data_log (FK_locationId, secs, dateCreated) VALUES ($locationId, $secs, $dateCreated);`;
        const values = { $locationId: entry.location.locationId, $secs: entry.secs, $dateCreated: new Services().getCurrentDate() };
    
        await TheDb.insert(sql, values).then((result) => {});
    }

        // GET TimeSlot
    public async getAll(): Promise<Array<TimeSlot>> {
        const sql = `SELECT dataLogId, enum_locations.locationId, enum_locations.locationName, enum_locations.recommendedAP, enum_locations.recommendedLevel, enum_territory.territoryId, enum_territory.territoryName, secs, dateCreated FROM data_log INNER JOIN enum_locations ON enum_locations.locationId == data_log.FK_locationId INNER JOIN enum_territory ON enum_territory.territoryId == enum_locations.FK_territoryId ORDER BY dateCreated DESC, dataLogId DESC`;
        const values = {};
            return await TheDb.selectAll(sql, values)
                .then((rows: any) => {
                    const nm: Array<TimeSlot> = new Array<TimeSlot>();
                    for (const row of rows) {
                        const item = this.fromRowTimeSlot(row);
                        nm.push(item);
                }
            return nm;
        });
    }

    private fromRowTimeSlot(row: TimeSlot): TimeSlot {
        this.dataLogId = row['dataLogId'];
        this.location.locationId = row['locationId'];
        this.location.locationName = row['locationName'];
        this.location.recommendedAP = row['recommendedAP'];
        this.location.recommendedLevel = row['recommendedLevel'];
        this.location.territoryId = row['territoryId'];
        this.location.territoryName = row['territoryName'];
        if(!!row['afuaruSpawnable'])
            this.location.afuaruSpawnable = true;
        this.secs = row['secs'];
        this.dateCreated = row['dateCreated'];
  
        return this;
    }
}