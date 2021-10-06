import { Injectable } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Injectable()
export class StopwatchService {
    private stopwatch: Observable<number> = interval(1000);
    private subscription: Subscription;
    public elapsedTime: number = 0;
    public isRunning: boolean = false;
    
    constructor(){

    }

    public startStopwatch() {
        this.isRunning = true;
        this.subscription = this.stopwatch.subscribe(() => {
            this.elapsedTime++;
        });
    }

    public stopStopwatch() {
        this.isRunning = false;
        this.subscription.unsubscribe();
    }

    public resetStopwatch() {
        this.stopStopwatch();
        this.elapsedTime = 0;
    }

    public checkForAddTime(): boolean {
        if(this.elapsedTime > 0 && this.isRunning == false)
            return true
        else
            return false
    }
}