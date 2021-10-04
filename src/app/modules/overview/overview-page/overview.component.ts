import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { OverviewService } from '../overview.service';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent extends BaseComponent implements OnInit {
  
  public isLoaded: boolean = false;

  constructor(private injector: Injector,
              private overviewService: OverviewService) {
    super(injector);
  }

  ngOnInit(): void {
    this.isLoaded = true;
  }
}
