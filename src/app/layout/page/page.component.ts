import { Component, Injector, OnInit } from '@angular/core';
import { ActiveViewport } from 'src/app/shared/classes/activeViewport';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'page',
  templateUrl: './page.component.html'
})
export class PageComponent extends BaseComponent implements OnInit {

  constructor(private injector: Injector,
              public activeViewport: ActiveViewport) { super(injector); }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
  }

}
