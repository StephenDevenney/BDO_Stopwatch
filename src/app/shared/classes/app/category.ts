export class Category {
    public categoryId: number = 0;
    public categoryName: string = "";
    public questingCompatible: boolean = false;

    constructor(categoryId?: number, categoryName?: string, questingCompatible?: boolean) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.questingCompatible = questingCompatible;
    }
}

export class CategoriesGrouped {
    public label: string = "-";
    public items: Array<Category> = new Array<Category>();

    constructor(label?: string, items?: Array<Category>) {
        if(label) {
            this.label = label;
            this.items = items;
        }
    }
}