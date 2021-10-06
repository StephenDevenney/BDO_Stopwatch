import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base.component';
import { InterfaceEnumService } from '../../general/interface-enums/enum.service';
@Component({
  selector: 'view-toggle',
  templateUrl: './viewToggle.component.html'
})
export class ViewToggleComponent extends BaseComponent implements OnInit {

  constructor(private injector: Injector,
              public enumUIService: InterfaceEnumService) {
    super(injector);
  }

  ngOnInit(): void {
    
  }
}
