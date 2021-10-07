import { Component, Injector, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/classes/app/category';
import { BaseComponent } from '../../../../shared/components/base.component';
import { InterfaceEnumService } from '../../general/interface-enums/enum.service';

@Component({
  selector: 'add-time',
  templateUrl: './addTime.component.html'
})
export class AddTimeComponent extends BaseComponent implements OnInit {

  public isLoaded: boolean = false;
  public categories: Array<Category> = new Array<Category>();
  public selectedCategory: Category = new Category;
  public categorySelected: boolean = false;
  public addToQuestingTime: boolean = false;

  constructor(private injector: Injector,
              public enumUIService: InterfaceEnumService) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    await this.databaseService.getCategories().then((res: Array<Category>) => {
      this.categories = res;
      // this.selectedCategory = this.categories[0];
    }); 
    this.isLoaded = true;
    console.log(this.categories);
  }

  public updateIsSelected() {
    if(!this.categorySelected)
      this.categorySelected = true;
  }
}
