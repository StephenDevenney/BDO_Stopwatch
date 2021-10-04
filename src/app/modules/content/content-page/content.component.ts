import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { ContentService } from '../content.service';

@Component({
  selector: 'content',
  templateUrl: './content.component.html'
})
export class ContentComponent extends BaseComponent implements OnInit {
  
  public isLoaded: boolean = false;

  constructor(private injector: Injector,
              private contentService: ContentService) {
    super(injector);
  }

  ngOnInit(): void {
    this.isLoaded = true;
  }
}
