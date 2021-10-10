import { Location } from "./locations";

export class TimeSlot {
    public location: Location = new Location;
    public secs: number = 0;
    public dateCreated: string = "";

    constructor(location?: Location, secs?: number, dateCreated?: string) {
        if(secs) {
            this.location = location;
            this.secs = secs;
            this.dateCreated = dateCreated;
        }
    }
}