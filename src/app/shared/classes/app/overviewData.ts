import { LocationsGrouped } from "./locations";


export class OverviewData {
    public topLocations: Array<TopFive> = new Array<TopFive>();
    public topTerritories: Array<TopFive> = new Array<TopFive>();
    public allLocations: Array<LocationsGrouped> = new Array<LocationsGrouped>();
    public totalTime: TimeData = new TimeData;

    constructor(topLocations?: Array<TopFive>, topTerritories?: Array<TopFive>, allLocations?: Array<LocationsGrouped>, totalTime?: TimeData) {
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
    public year: number = 0;
    public month: number = 0;
    public week: number = 0;
    public today: number = 0;
    public total: number = 0;

    constructor(average?: number, year?: number, month?: number, week?: number, today?: number, total?: number) {
        if(average) {
            this.average = average;
            this.year = year;
            this.month = month;
            this.week = week;
            this.today = today;
            this.total = total;
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

export class RegionStats {
    public location: LocationStats = new LocationStats;
    public territory: TerritoryStats = new TerritoryStats;
    
    constructor(location?: LocationStats, territory?: TerritoryStats) {
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