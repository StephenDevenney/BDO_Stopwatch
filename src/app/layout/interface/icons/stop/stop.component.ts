import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'icon-stop',
  templateUrl: './stop.component.html'
})
export class IconStopComponent extends BaseComponent implements OnInit {
  
  public isLoaded: boolean = false;

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.isLoaded = true;
  }
}
