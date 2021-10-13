import { Injectable } from "@angular/core";
import { OverviewData, TimeData, TopFive } from "../../../app/shared/classes/app/overviewData";
import { TopFiveContext } from "../sqlContext/topFiveContext";
import { TotalTimeContext } from "../sqlContext/totalTimeContext";
import { TimeSlotHandler } from "./timeSlotHandler";
import { Services } from "../../../app/shared/services/services";

@Injectable()
export class OverviewDataHandler {

    constructor(private totalTimeContext: TotalTimeContext,
                private topFiveContext: TopFiveContext,
                private timeSlotHandler: TimeSlotHandler,
                private services: Services) {}

    public async getOverviewData(): Promise<OverviewData> {
        let overviewData: OverviewData = new OverviewData;

            // get topLocations
        await this.topFiveContext.getTopFiveLocations().then((topFiveLocations: Array<TopFive>) => {
            overviewData.topLocations = topFiveLocations;
        });

            // get topTerritories
        await this.topFiveContext.getTopFiveTerritories().then((topFiveTerritories: Array<TopFive>) => {
            overviewData.topTerritories = topFiveTerritories;
        });

            // get allLocations
        overviewData.allLocations = await this.timeSlotHandler.getGroupedLocations();

            // get timeData (Overall)
        await this.totalTimeContext.getData(this.services.getCurrentDate(), this.services.getWeekStartDate(), this.services.getMonthStartDate(), this.services.getYearStartDate()).then((totals: TimeData) => {
            overviewData.totalTime = totals;
        });
        
        return overviewData;
    }
}