import { TheDb } from '../thedb';
import { TimeSlot } from '../../../app/shared/classes/app/timeSlot';
import { Services } from '../../../app/shared/services/services';
import { TimeSlotEntity } from 'src/server/entities/timeSlotEntity';

export class TimeSlotContext {
    private timeSlot: TimeSlot = new TimeSlot;

        // Add Time Slot
    public async insertTime(entry: TimeSlot): Promise<void> {
        const sql = `INSERT OR REPLACE INTO data_log (FK_locationId, secs, dateCreated) VALUES ($locationId, $secs, $dateCreated);`;
        const values = { $locationId: entry.location.locationId, $secs: entry.secs, $dateCreated: new Services().getCurrentDate() };
    
        await TheDb.insert(sql, values).then((result) => {});
    }

        // GET TimeSlot
    public async getAll(): Promise<Array<TimeSlot>> {
        const sql = `SELECT enum_locations.locationId, enum_locations.locationName, enum_locations.afuaruSpawnable, enum_locations.recommendedAP, enum_locations.recommendedLevel, enum_territory.territoryId, enum_territory.territoryName, SUM(secs)as secs, dateCreated FROM data_log INNER JOIN enum_locations ON enum_locations.locationId == data_log.FK_locationId INNER JOIN enum_territory ON enum_territory.territoryId == enum_locations.FK_territoryId GROUP BY locationId ORDER BY dateCreated DESC, dataLogId DESC`;
        const values = {};
        return await TheDb.selectAll(sql, values)
        .then((rows: any) => {
            const nm: Array<TimeSlot> = new Array<TimeSlot>();
            for (const row of rows) {
                const item = new TimeSlotContext().fromRowTimeSlot(row);
                nm.push(item);
            }
            return nm;
        });
    }

    private fromRowTimeSlot(row: TimeSlotEntity): TimeSlot {
        this.timeSlot.location.locationId = row['locationId'];
        this.timeSlot.location.locationName = row['locationName'];
        this.timeSlot.location.recommendedAP = row['recommendedAP'];
        this.timeSlot.location.recommendedLevel = row['recommendedLevel'];
        this.timeSlot.location.territory.territoryId = row['territoryId'];
        this.timeSlot.location.territory.territoryName = row['territoryName'];
        if(!!row['afuaruSpawnable'])
            this.timeSlot.location.afuaruSpawnable = true;
        this.timeSlot.secs = row['secs'];
        this.timeSlot.dateCreated = row['dateCreated'];
  
        return this.timeSlot;
    }
}