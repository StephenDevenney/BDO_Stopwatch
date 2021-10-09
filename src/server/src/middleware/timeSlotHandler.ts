import { Injectable } from "@angular/core";
import { TimeSlot } from "../../../app/shared/classes/app/timeSlot";
import { TimeSlotContext } from "../sqlContext/timeSlotContext";

@Injectable()
export class TimeSlotHandler {

    public constructor(private timeSlotContext: TimeSlotContext) {}

    public async addNewEntry(newEntry: TimeSlot): Promise<void> {
        await this.timeSlotContext.insertTime(newEntry);
    }

    public async getTimeSlots(): Promise<Array<TimeSlot>> {
        let timeSlots = new Array<TimeSlot>();
        await this.timeSlotContext.getAll().then((_ : Array<TimeSlot>) => {
            timeSlots = _;
        });

        return timeSlots;
    }
}