import { Component, Injector, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base.component';
import { InterfaceEnumService } from '../interface-enums/enum.service';
import { ButtonIconEnum, ButtonTypeEnum } from '../interface-enums/enums/button';

@Component({
  selector: 's-button',
  templateUrl: './button.component.html'
})
export class ButtonUIComponent extends BaseComponent implements OnInit {
  @Input() buttonType?: ButtonTypeEnum;
  @Input() iconType?: ButtonIconEnum;
  @Input() text?: string;

  constructor(private injector: Injector,
              private enumUIService: InterfaceEnumService) {
    super(injector);
  }

  ngOnInit(): void {
    
  }
}
