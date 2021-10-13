import { Component, Injector, OnInit } from '@angular/core';
import { OverviewData, RegionStats } from '../../../../shared/classes/app/overviewData';
import { Location } from '../../../../shared/classes/app/locations';
import { BaseComponent } from '../../../../shared/components/base.component';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent extends BaseComponent implements OnInit {

  private isLoaded: boolean = false;
  private carouselTabs: any[] = [{id: 1, label: "Top 5 Locations"},{ id: 2, label: "Top 5 Territories" },{id: 3, label: "Location"},{ id: 4, label: "Totals" }];
  private overviewData: OverviewData;
  private selectedLocation: Location = new Location;
  private selectedLocationStats: RegionStats = new RegionStats;
  private locationSelected: boolean = false;
  private overallTime: number = 0;

  constructor(private injector: Injector) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    await this.loadOverviewData();
    this.isLoaded = true;
  }

  private async loadOverviewData() {
    await this.databaseService.getOverviewData().catch(() => {

    }).then((_: OverviewData) => {
      this.overviewData = _;
      this.overallTime = this.overviewData.totalTime.filter(t => t.label == "Total")[0].secs;
    });
  }

  private loadLocation() {
    if(!this.locationSelected)
      this.locationSelected = true;

    this.databaseService.getLocationData(this.selectedLocation).then((regStats: RegionStats) => {
      this.selectedLocationStats = regStats;
    });
  }
}
