import { Component, Injector, OnInit } from '@angular/core';
import { TimeSlot } from '../../../../shared/classes/app/timeSlot';
import { BaseComponent } from '../../../../shared/components/base.component';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent extends BaseComponent implements OnInit {

  public isLoaded: boolean = false;
  private carouselTabs: any[] = [{id: 1, label: "Top Locations"},{ id: 2, label: "Top Territories" },{id: 3, label: "Location"},{ id: 4, label: "Total" }];

  constructor(private injector: Injector) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    this.isLoaded = true;
  }
}
