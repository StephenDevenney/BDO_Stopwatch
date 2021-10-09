import { Component, Injector, OnInit } from '@angular/core';
import { ChartVM, TimeSlot } from '../../../../shared/classes/app/timeSlot';
import { BaseComponent } from '../../../../shared/components/base.component';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent extends BaseComponent implements OnInit {

  public isLoaded: boolean = false;
  public chart: ChartVM;

  constructor(private injector: Injector) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    await this.loadTimeSlots();
    this.isLoaded = true;
  }

  public async loadTimeSlots(): Promise<void> {
    await this.databaseService.getTimeSlots().catch(() => {

    }).then((timeSlots: Array<TimeSlot>) => {
      if(timeSlots)
        this.chart = new ChartVM(timeSlots, "pie");
    });
  }
}
