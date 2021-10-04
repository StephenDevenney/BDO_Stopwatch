import { inject, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoadingService } from '../services/loading.service';

export class BaseComponent {
    public location: Location;
    public router: Router;
    public messageService: MessageService;
    public loader: LoadingService;

    constructor(injector: Injector) {
        this.location = injector.get(Location);
        this.router = injector.get(Router);
        this.messageService = injector.get(MessageService);
        this.loader = injector.get(LoadingService);
    }
}