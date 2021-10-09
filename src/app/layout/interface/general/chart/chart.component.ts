import { AfterViewInit, Component, ElementRef, EventEmitter, Injector, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChartVM } from '../../../../shared/classes/app/timeSlot';
import { Chart } from 'chart.js';
import { BaseComponent } from '../../../../shared/components/base.component';

@Component({
  selector: 's-chart',
  templateUrl: './chart.component.html'
})
export class ChartUIComponent extends BaseComponent implements AfterViewInit {
  @Input() chart?: ChartVM;
  @ViewChild('pieCanvas') private pieCanvas: ElementRef;

  public pieChart: any;

  constructor(private injector: Injector) {
    super(injector);
  }

  ngAfterViewInit(): void {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, this.chart.config);
  }
}
