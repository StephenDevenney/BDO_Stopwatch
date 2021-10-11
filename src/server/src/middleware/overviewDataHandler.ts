import { Injectable } from "@angular/core";
import { OverviewData, TopFive } from "src/app/shared/classes/app/overviewData";
import { LocationContext } from "../sqlContext/locationContext";
import { TerritoryContext } from "../sqlContext/territoryContext";
import { TimeSlotContext } from "../sqlContext/timeSlotContext";
import { TopFiveContext } from "../sqlContext/topFiveContext";
import { TotalTimeContext } from "../sqlContext/totalTimeContext";

@Injectable()
export class OverviewDataHandler {

    constructor(private timeSlotContext: TimeSlotContext,
                        private totalTimeContext: TotalTimeContext,
                        private topFiveContext: TopFiveContext) {}

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

        // get timeData (Overall)

        return overviewData;
    }
}