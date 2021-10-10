import { Component, Injector, OnInit } from '@angular/core';
import { LocationsGrouped, Location } from '../../../../shared/classes/app/locations';
import { TimeSlot } from '../../../../shared/classes/app/timeSlot';
import { BaseComponent } from '../../../../shared/components/base.component';
import { InterfaceEnumService } from '../../general/interface-enums/enum.service';

@Component({
  selector: 'add-time',
  templateUrl: './addTime.component.html'
})
export class AddTimeComponent extends BaseComponent implements OnInit {

  public isLoaded: boolean = false;
  public locationsGrouped: Array<LocationsGrouped> = new Array<LocationsGrouped>();
  public selectedLocation: Location = new Location;
  public locationSelected: boolean = false;
  public addToQuestingTime: boolean = false;

  constructor(private injector: Injector,
              public enumUIService: InterfaceEnumService) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    await this.databaseService.getLocations().then((res: Array<LocationsGrouped>) => {
      this.locationsGrouped = res;
    }); 
    this.isLoaded = true;
  }

  public updateIsSelected() {
    if(!this.locationSelected)
      this.locationSelected = true;
  }

  public async addTime() {
    if(this.locationSelected) {
      this.loader.startBackground();
      await this.databaseService.addNewEntry(new TimeSlot(this.selectedLocation, this.stopwatch.elapsedTime, "")).catch(() => {
        this.loader.stopBackground();
      }).then(() => {
        this.loader.stopBackground();
        this.stopwatch.resetStopwatch();
      });
    }
  }
}
