import { inject, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoadingService } from '../services/loading.service';
import { ActiveViewport } from '../classes/activeViewport';

export class BaseComponent {
    public location: Location;
    public router: Router;
    public messageService: MessageService;
    public loader: LoadingService;
    public viewport: ActiveViewport;

    constructor(injector: Injector) {
        this.viewport = injector.get(ActiveViewport);
        this.location = injector.get(Location);
        this.router = injector.get(Router);
        this.messageService = injector.get(MessageService);
        this.loader = injector.get(LoadingService);
    }
}