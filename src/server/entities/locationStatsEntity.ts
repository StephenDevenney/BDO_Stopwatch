export class LocationStatsEntity {
    public locationId: number = 0;
    public locationName: string = "-";
    public territoryId: number = 0;
    public territoryName: string = "-";
    public locationSecs: number = 0;
    public territorySecs: number = 0;
    public locationOccurs: number = 0;
    public territoryOccurs: number = 0;
    public recommendedLevel: string = "";
    public recommendedAP: string = "";
    public afuaruSpawnable: boolean = false;
    
    constructor(locationId?: number, locationName?: string, territoryId?: number, territoryName?: string,
        locationSecs?: number, territorySecs?: number, locationOccurs?: number, territoryOccurs?: number,
        recommendedLevel?: string, recommendedAP?: string, afuaruSpawnable?: boolean) {
        if(locationId) {
            this.locationId = locationId;
            this.locationName = locationName;
            this.territoryId = territoryId;
            this.territoryName = territoryName;
            this.locationSecs = locationSecs;
            this.territorySecs = territorySecs;
            this.locationOccurs = locationOccurs;
            this.territoryOccurs = territoryOccurs;
            this.recommendedLevel = recommendedLevel;
            this.recommendedAP = recommendedAP;
            this.afuaruSpawnable = afuaruSpawnable;
        }
    }
}