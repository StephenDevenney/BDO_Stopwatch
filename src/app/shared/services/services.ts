import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class Services { 
        // Current Date - Today
    public getCurrentDate(): string {
        return moment().format("YYYY-MM-DD");
    }

        // Current Date - Week Begin (isoWeek starts on monday)
    public getWeekStartDate(): string {
        return moment().startOf('isoWeek').format("YYYY-MM-DD");
    }

        // Current Date - Month Begin
    public getMonthStartDate(): string {
        return moment().startOf('month').format("YYYY-MM-DD");
    }

        // Current Date - Year Begin
    public getYearStartDate(): string {
        return moment().startOf('year').format("YYYY-MM-DD");
    }

        // Convert secs to hours for canvas tooltip
    public convertSecsToHours(seconds: number): number {
        let timeHours = Math.floor(seconds/60);
        return timeHours;
    }
}