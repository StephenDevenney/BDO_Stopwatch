import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { ActiveViewport } from '../../../../shared/classes/activeViewport';
import { BaseComponent } from '../../../../shared/components/base.component';
import { ViewEnum } from '../../../../shared/classes/viewEnum';
@Component({
  selector: 'view-toggle',
  templateUrl: './viewToggle.component.html'
})
export class ViewToggleComponent extends BaseComponent implements OnInit {
  
  public isLoaded: boolean = false;

  constructor(private injector: Injector,
              public activeViewport: ActiveViewport) {
    super(injector);
  }

  ngOnInit(): void {
    this.isLoaded = true;
  }

  public get ViewEnum() {
    return ViewEnum; 
  }
}
