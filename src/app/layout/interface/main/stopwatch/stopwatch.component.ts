import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base.component';

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
}
