import { Injectable } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Injectable()
export class StopwatchService {
    private timer: Observable<number> = interval(1000);
    private subscription: Subscription;
    public elapsedTime: number = 0;
    
    constructor(){

    }

    public startStopwatch() {
        this.subscription = this.timer.subscribe(() => {
            this.elapsedTime++;
        });
    }

    public stopStopwatch() {
        this.subscription.unsubscribe();
    }

}