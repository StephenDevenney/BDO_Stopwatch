import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { ActiveViewport } from '../../../../shared/classes/activeViewport';
import { BaseComponent } from '../../../../shared/components/base.component';
import { ViewportEnum } from '../../../../shared/classes/viewportEnum';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html'
})
export class StopwatchComponent extends BaseComponent implements OnInit, OnDestroy {
  
  public isLoaded: boolean = false;
  public stopwatchRunning: boolean = false;
  private timer: Observable<number> = interval(1000);
  private subscription: Subscription;
  public time: number = 0;
  public pausedTime: number = 0;

  constructor(private injector: Injector,
              public activeViewport: ActiveViewport) {
    super(injector);
  }

  ngOnInit(): void {
    this.isLoaded = true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public startStopwatch() {
    this.stopwatchRunning = true;
    this.subscription = this.timer.subscribe(() => {
      if(this.stopwatchRunning == true)
        this.time++;
    });
  }

  public stopStopwatch() {
    this.subscription.unsubscribe();
    this.stopwatchRunning = false;
  }

  public get ViewportEnum() {
    return ViewportEnum; 
  }
}
