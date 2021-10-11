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

  private isLoaded: boolean = false;
  private locationsGrouped: Array<LocationsGrouped> = new Array<LocationsGrouped>();
  private selectedLocation: Location = new Location;
  private locationSelected: boolean = false;
  private addToQuestingTime: boolean = false;

  constructor(private injector: Injector,
              private enumUIService: InterfaceEnumService) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    await this.databaseService.getLocations().then((res: Array<LocationsGrouped>) => {
      this.locationsGrouped = res;
    }); 
    this.isLoaded = true;
  }

  private updateIsSelected() {
    if(!this.locationSelected)
      this.locationSelected = true;
  }

  private async addTime() {
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
