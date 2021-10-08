import { Category } from "./category";

export class TimeSlot {
    public dataLogId: number = 0;
    public category: Category = new Category;
    public secs: number = 0;
    public dateCreated: string = "";

    constructor(dataLogId?: number, category?: Category, secs?: number, dateCreated?: string) {
        if(dataLogId) {
            this.dataLogId = dataLogId;
            this.category = category;
            this.secs = secs;
            this.dateCreated = dateCreated;
        }
    }
}

export class PieChart {
    data: any;
    options: any;
    
    constructor(dataset?: Array<TimeSlot>) {
        this.data = {
            labels: dataset.forEach(_ => _.category.categoryName),
            datasets: [
                {
                    data: dataset.forEach(_ => _.secs),
                    backgroundColor: [
                        "#42A5F5",
                        "#66BB6A",
                        "#FFA726"
                    ],
                    hoverBackgroundColor: [
                        "#64B5F6",
                        "#81C784",
                        "#FFB74D"
                    ]
                }
            ]
        };
        
        this.options = {
            title: {
                display: true,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
    }
}