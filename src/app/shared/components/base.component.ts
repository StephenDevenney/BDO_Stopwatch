import { inject, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { StopwatchService } from '../services/stopwatch.service';
import { ViewService } from '../services/view.service';
import { DatabaseService } from '../services/database.service';

export class BaseComponent {
    public location: Location;
    public router: Router;
    public loader: LoadingService;
    public stopwatch: StopwatchService;
    public viewService: ViewService;
    public databaseService: DatabaseService;

    constructor(injector: Injector) {
        this.viewService = injector.get(ViewService);
        this.databaseService = injector.get(DatabaseService);
        this.stopwatch = injector.get(StopwatchService);
        this.location = injector.get(Location);
        this.router = injector.get(Router);
        this.loader = injector.get(LoadingService);
    }
}