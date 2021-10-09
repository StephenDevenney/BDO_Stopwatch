export class Location {
    public locationId: number = 1;
    public territoryId: number = 1;
    public locationName: string = "-";
    public territoryName: string = "-";
    public recommendedLevel: string = "";
    public recommendedAP: string = "";
    public afuaruSpawnable: boolean = false;
    public locationCount: number = 0;

    constructor(locationId?: number, territoryId?: number, locationName?: string, territoryName?: string, recommendedLevel?: string, recommendedAP?: string, afuaruSpawnable?: boolean, locationCount?: number) {
        if(locationId) {
            this.locationId = locationId;
            this.territoryId = territoryId;
            this.locationName = locationName;
            this.territoryName = territoryName;
            this.recommendedLevel = recommendedLevel;
            this.recommendedAP = recommendedAP; 
            this.afuaruSpawnable = afuaruSpawnable;
        }

        if(locationCount) 
            this.locationCount = locationCount;
    }
}

export class Territory {
    public territoryId: number = 1;
    public territoryName: string = "-";

    constructor(territoryId?: number, territoryName?: string) {
        if(territoryId) {
            this.territoryId = territoryId;
            this.territoryName = territoryName;
        }
    }
}

export class LocationsGrouped {
    public label: string = "-";
    public items: Array<Location> = new Array<Location>();

    constructor(label?: string, items?: Array<Location>) {
        if(label) {
            this.label = label;
            this.items = items;
        }
    }
}