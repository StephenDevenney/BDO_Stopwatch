export class TopFiveEntity {
    public itemId: number = 0;
    public itemName: string = "";
    public secs: number = 0;
    public occurs: number = 0;
    
    constructor(itemId?: number, itemName?: string, secs?: number, occurs?: number) {
        if(itemId) {
            this.itemId = itemId;
            this.itemName = itemName;
            this.secs = secs;
            this.occurs = occurs;
        }
    }
}