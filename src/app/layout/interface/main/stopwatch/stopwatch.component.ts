import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base.component';
import { ViewportEnum } from '../../../../shared/classes/viewportEnum';

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html'
})
export class StopwatchComponent extends BaseComponent implements OnInit {
  
  public isLoaded: boolean = false;

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.isLoaded = true;
  }

  public get ViewportEnum() {
    return ViewportEnum; 
  }
}
