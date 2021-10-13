import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base.component';

@Component({
  selector: 'icon-stop',
  templateUrl: './stop.component.html'
})
export class IconStopComponent extends BaseComponent implements OnInit {

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    
  }
}
