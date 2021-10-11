import { Territory } from "./locations";
import { TimeSlot } from "./timeSlot";


export class OverviewData {
    public topLocations: Array<TopFive> = new Array<TopFive>();
    public topTerritories: Array<TopFive> = new Array<TopFive>();
    public allLocations: Array<TimeSlot> = new Array<TimeSlot>();
    public totalTime: TimeData = new TimeData;

    constructor(topLocations?: Array<TopFive>, topTerritories?: Array<TopFive>, allLocations?: Array<TimeSlot>, totalTime?: TimeData) {
        if(topLocations) {
            this.topLocations = topLocations;
            this.topTerritories = topTerritories;
            this.allLocations = allLocations;
            this.totalTime = totalTime;
        }
    }
}

export class TimeData {
    public average: number = 0;
    public month: number = 0;
    public week: number = 0;
    public today: number = 0;

    constructor(average?: number, month?: number, week?: number, today?: number) {
        if(average) {
            this.average = average;
            this.month = month;
            this.week = week;
            this.today = today;
        }
    }
}

export class TopFive {
    public itemName: string = "";
    public secs: number = 0;
    public occurs: number = 0;
    
    constructor(itemName?: string, secs?: number, occurs?: number) {
        if(itemName) {
            this.itemName = itemName;
            this.secs = secs;
            this.occurs = occurs;
        }
    }
}