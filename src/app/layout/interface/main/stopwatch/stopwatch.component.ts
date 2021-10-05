import { Component, Injector, OnInit } from '@angular/core';
import { ActiveViewport } from '../../../../shared/classes/activeViewport';
import { BaseComponent } from '../../../../shared/components/base.component';
import { ViewportEnum } from '../../../../shared/classes/viewportEnum';

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html'
})
export class StopwatchComponent extends BaseComponent implements OnInit {
  
  public isLoaded: boolean = false;

  constructor(private injector: Injector,
              public activeViewport: ActiveViewport) {
    super(injector);
  }

  ngOnInit(): void {
    this.isLoaded = true;
  }

  public get ViewportEnum() {
    return ViewportEnum; 
  }
}
