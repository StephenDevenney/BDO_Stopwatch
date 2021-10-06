import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'page',
  templateUrl: './page.component.html'
})
export class PageComponent extends BaseComponent implements OnInit {

  constructor(private injector: Injector) { super(injector); }

  ngOnInit(): void {

  }
}
