import { Category } from "./category";

export class TimeSlot {
    public dataLogId: number = 0;
    public category: Category = new Category;
    public secs: number = 0;
    public dateCreated: string = "";

    constructor(dataLogId?: number, category?: Category, secs?: number, dateCreated?: string) {
        this.dataLogId = dataLogId;
        this.category = category;
        this.secs = secs;
        this.dateCreated = dateCreated;
    }
}