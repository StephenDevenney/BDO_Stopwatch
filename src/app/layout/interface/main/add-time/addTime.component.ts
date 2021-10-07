import { Component, Injector, OnInit } from '@angular/core';
import { CategoriesGrouped, Category } from 'src/app/shared/classes/app/category';
import { TimeSlot } from 'src/app/shared/classes/app/timeSlot';
import { BaseComponent } from '../../../../shared/components/base.component';
import { InterfaceEnumService } from '../../general/interface-enums/enum.service';

@Component({
  selector: 'add-time',
  templateUrl: './addTime.component.html'
})
export class AddTimeComponent extends BaseComponent implements OnInit {

  public isLoaded: boolean = false;
  public categoriesGrouped: Array<CategoriesGrouped> = new Array<CategoriesGrouped>();
  public selectedCategory: Category = new Category;
  public categorySelected: boolean = false;
  public addToQuestingTime: boolean = false;

  constructor(private injector: Injector,
              public enumUIService: InterfaceEnumService) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    await this.databaseService.getCategories().then((res: Array<CategoriesGrouped>) => {
      this.categoriesGrouped = res;
    }); 
    this.isLoaded = true;
  }

  public updateIsSelected() {
    if(!this.categorySelected)
      this.categorySelected = true;
  }

  public async addTime() {
    if(this.categorySelected) {
      this.loader.startBackground();
      await this.databaseService.addNewEntry(new TimeSlot(0, this.selectedCategory, this.stopwatch.elapsedTime, ""), this.addToQuestingTime).catch(() => {
        this.loader.stopBackground();
      }).then(() => {
        this.loader.stopBackground();
        this.stopwatch.resetStopwatch();
      });
    }
  }
}
