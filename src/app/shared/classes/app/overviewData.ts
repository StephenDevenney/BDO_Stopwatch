import { Location } from "./locations";
import { Territory } from "./locations";
import { TimeSlot } from "./timeSlot";


export class OverviewData {
    public topLocations: Array<TopFive> = new Array<TopFive>();
    public topTerritories: Array<TopFive> = new Array<TopFive>();
    public allLocations: LocationStatsOverview = new LocationStatsOverview;
    public totalTime: TimeData = new TimeData;

    constructor(topLocations?: Array<TopFive>, topTerritories?: Array<TopFive>, allLocations?: LocationStatsOverview, totalTime?: TimeData) {
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

export class LocationStatsOverview {
    public location: Array<LocationStats> = new Array<LocationStats>();
    public territory: Array<TerritoryStats> = new Array<TerritoryStats>();
    
    constructor(location?: Array<LocationStats>, territory?: Array<TerritoryStats>) {
        if(location) {
            this.location = location;
            this.territory = territory;
        }
    }
}

export class LocationStats {
    public locationId: number = 1;
    public locationName: string = "-";
    public locationSecs: number = 0;
    public locationOccurs: number = 0;
    public recommendedLevel: string = "";
    public recommendedAP: string = "";
    public afuaruSpawnable: boolean = false;
    
    constructor(locationId?: number, locationName?: string, locationSecs?: number, locationOccurs?: number,
        recommendedLevel?: string, recommendedAP?: string, afuaruSpawnable?: boolean) {
        if(locationId) {
            this.locationId = locationId;
            this.locationName = locationName;
            this.locationSecs = locationSecs;
            this.locationOccurs = locationOccurs;
            this.recommendedLevel = recommendedLevel;
            this.recommendedAP = recommendedAP;
            this.afuaruSpawnable = afuaruSpawnable;
        }
    }
}

export class TerritoryStats {
    public territoryId: number = 0;
    public territoryName: string = "-";
    public territorySecs: number = 0;
    public territoryOccurs: number = 0;
    
    constructor(territoryId?: number, territoryName?: string, territorySecs?: number, territoryOccurs?: number) {
        if(territoryId) {
            this.territoryId = territoryId;
            this.territoryName = territoryName;
            this.territorySecs = territorySecs;
            this.territoryOccurs = territoryOccurs;
        }
    }
}