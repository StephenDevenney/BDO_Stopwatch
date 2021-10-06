import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/shared/classes/app/category';
import { BaseComponent } from '../../../../shared/components/base.component';
import { InterfaceEnumService } from '../interface-enums/enum.service';
import { ButtonIconEnum, ButtonTypeEnum } from '../interface-enums/enums/button';

@Component({
  selector: 's-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownUIComponent extends BaseComponent implements OnInit {
  @Input() buttonType?: ButtonTypeEnum;
  @Input() iconType?: ButtonIconEnum;
  @Input() text?: string;
  public categories: Array<Category> = new Array<Category>();
  public isLoaded: boolean = false;

  constructor(private injector: Injector,
              public enumUIService: InterfaceEnumService) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    await this.databaseService.getCategories().then((res: Array<Category>) => {
      this.categories = res;
    }); 
    this.isLoaded = true;
    console.log(this.categories);
  }
}
