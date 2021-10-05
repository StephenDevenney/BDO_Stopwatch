import { Injectable } from '@angular/core';
import { ActiveViewport } from '../classes/activeViewport';
import { ViewEnum } from '../classes/viewEnum';
import { ViewportEnum } from '../classes/viewportEnum';

@Injectable()
export class ViewportService {
    constructor(private activeViewport: ActiveViewport){}

    public loadViewport() {
        this.activeViewport.view = ViewEnum.Stopwatch;
        let vp: ViewportEnum = this.getViewport() as ViewportEnum;
        if(vp != null)
            this.updateViewport(vp);
        else
            this.determineViewport(window.innerWidth, window.innerHeight);
    }

    public getViewport(): string | null {
        return localStorage.getItem("viewport");
    }

    public updateViewport(viewport: ViewportEnum) {
        this.activeViewport.viewport = viewport;
        localStorage.removeItem("viewport");
        localStorage.setItem("viewport", viewport);
    }

    public determineViewport(width: number, height: number) {
        let newViewport: ViewportEnum;

        if(width < 1000 && height < 1000)
            newViewport = ViewportEnum.Small;
        else if(width > 1000 && height < 1000)
            newViewport = ViewportEnum.Long;
        else if(width < 1000 && height > 1000)
            newViewport = ViewportEnum.Tall;
        else
            newViewport = ViewportEnum.Long;

        if(this.activeViewport.viewport != newViewport)
            this.updateViewport(newViewport);
    }
}