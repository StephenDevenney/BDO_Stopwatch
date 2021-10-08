import { Injectable } from "@angular/core";
import { Category } from "src/app/shared/classes/app/category";
import { TimeSlot } from "src/app/shared/classes/app/timeSlot";
import { TimeSlotContext } from "../sqlContext/timeSlotContext";

@Injectable()
export class TimeSlotHandler {

    public constructor(private timeSlotContext: TimeSlotContext) {}

    public async addNewEntry(newEntry: TimeSlot, addToQuestingTime: boolean): Promise<void> {
        let temp: Category = newEntry.category;
        if(addToQuestingTime) {
            newEntry.category = new Category(7, "Questing", false);
            await this.timeSlotContext.insertTime(newEntry);
        }
        newEntry.category = temp;
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