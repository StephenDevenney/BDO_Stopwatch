import { inject, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { ActiveViewport } from '../classes/activeViewport';
import { StopwatchService } from '../services/stopwatch.service';

export class BaseComponent {
    public location: Location;
    public router: Router;
    public loader: LoadingService;
    public viewHandler: ActiveViewport;
    public stopwatch: StopwatchService;

    constructor(injector: Injector) {
        this.viewHandler = injector.get(ActiveViewport);
        this.stopwatch = injector.get(StopwatchService);
        this.location = injector.get(Location);
        this.router = injector.get(Router);
        this.loader = injector.get(LoadingService);
    }
}