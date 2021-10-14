export class TimeSlotEntity {
    public locationId: number = 0;
    public locationName: string = "-";
    public territoryId: number = 0;
    public territoryName: string = "-";
    public recommendedLevel: string = "";
    public recommendedAP: string = "";
    public afuaruSpawnable: boolean = false;
    public secs: number = 0;
    public dateCreated: string = "";

    constructor(locationId?: number, locationName?: string, territoryId?: number, territoryName?: string, recommendedLevel?: string, recommendedAP?: string, afuaruSpawnable?: boolean, secs?: number, dateCreated?: string) {
        if(locationId) {
            this.locationId = locationId;
            this.locationName = locationName;
            this.territoryId = territoryId;
            this.territoryName = territoryName;
            this.recommendedLevel = recommendedLevel;
            this.recommendedAP = recommendedAP; 
            this.afuaruSpawnable = afuaruSpawnable;
            this.secs = secs;
            this.dateCreated = dateCreated;
        }
    }
}