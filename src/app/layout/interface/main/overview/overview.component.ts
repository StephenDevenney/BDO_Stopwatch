import { Component, Injector, OnInit } from '@angular/core';
import { PieChart, TimeSlot } from '../../../../shared/classes/app/timeSlot';
import { BaseComponent } from '../../../../shared/components/base.component';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent extends BaseComponent implements OnInit {

  public chart: PieChart;

  constructor(private injector: Injector) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    await this.loadTimeSlots();
  }

  public async loadTimeSlots(): Promise<void> {
    await this.databaseService.getTimeSlots().catch(() => {

    }).then((timeSlots: Array<TimeSlot>) => {
      console.log(timeSlots);
    });
  }
}
