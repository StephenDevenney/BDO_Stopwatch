import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base.component';
import { InterfaceEnumService } from '../interface-enums/enum.service';
import { ButtonIconEnum, ButtonTypeEnum } from '../interface-enums/enums/button';

@Component({
  selector: 's-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxUIComponent extends BaseComponent implements OnInit {
  @Input() buttonType?: ButtonTypeEnum;
  @Input() iconType?: ButtonIconEnum;
  @Input() text?: string;

  constructor(private injector: Injector,
              public enumUIService: InterfaceEnumService) {
    super(injector);
  }

  ngOnInit(): void {
    
  }
}
