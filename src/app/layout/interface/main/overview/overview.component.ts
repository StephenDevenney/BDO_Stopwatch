import { Component, Injector, OnInit } from '@angular/core';
import { OverviewData } from 'src/app/shared/classes/app/overviewData';
import { BaseComponent } from '../../../../shared/components/base.component';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent extends BaseComponent implements OnInit {

  private isLoaded: boolean = false;
  private carouselTabs: any[] = [{id: 1, label: "Top 5 Locations"},{ id: 2, label: "Top 5 Territories" },{id: 3, label: "Location"},{ id: 4, label: "Total" }];
  private overviewData: OverviewData;

  constructor(private injector: Injector) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    await this.loadOverviewData();
    console.log(this.overviewData);
    this.isLoaded = true;
  }

  private async loadOverviewData() {
    await this.databaseService.getOverviewData().catch(() => {

    }).then((_: OverviewData) => {
      this.overviewData = _;
    });
  }
}
