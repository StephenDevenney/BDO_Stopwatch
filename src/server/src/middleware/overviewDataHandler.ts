import { Injectable } from "@angular/core";
import { LocationContext } from "../sqlContext/locationContext";
import { TerritoryContext } from "../sqlContext/territoryContext";
import { TimeSlotContext } from "../sqlContext/timeSlotContext";
import { TotalTimeContext } from "../sqlContext/totalTimeContext";

@Injectable()
export class OverviewDataHandler {

    public constructor(private timeSlotContext: TimeSlotContext,
                        private totalTimeContext: TotalTimeContext) {}

    public async getOverviewData(): Promise<void> {
        // get topLocations

        // get topTerritories

        // get allLocations

        // get timeData (Overall)
    }
}