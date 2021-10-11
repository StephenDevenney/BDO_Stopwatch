export class Location {
    public locationId: number = 1;
    public locationName: string = "-";
    public territory: Territory = new Territory;
    public recommendedLevel: string = "";
    public recommendedAP: string = "";
    public afuaruSpawnable: boolean = false;

    constructor(locationId?: number, locationName?: string, territory?: Territory, recommendedLevel?: string, recommendedAP?: string, afuaruSpawnable?: boolean) {
        if(locationId) {
            this.locationId = locationId;
            this.locationName = locationName;
            this.territory = territory;
            this.recommendedLevel = recommendedLevel;
            this.recommendedAP = recommendedAP; 
            this.afuaruSpawnable = afuaruSpawnable;
        }
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