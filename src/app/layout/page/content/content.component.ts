import { Component, Injector, OnInit } from '@angular/core';
import { ActiveViewport } from 'src/app/shared/classes/activeViewport';
import { ViewportEnum } from 'src/app/shared/classes/viewportEnum';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'content',
  templateUrl: './content.component.html'
})
export class ContentComponent extends BaseComponent implements OnInit {
  
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
