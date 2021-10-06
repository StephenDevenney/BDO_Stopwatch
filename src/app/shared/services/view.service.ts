import { Injectable } from '@angular/core';
import { SmallViewContentEnum } from '../classes/smallViewContentEnum';
import { ViewportEnum } from '../classes/viewportEnum';

@Injectable()
export class ViewService {
    public currentViewport: ViewportEnum;
    public currentSmallViewContent: SmallViewContentEnum;

    constructor(){}

    /*
        Views
    */
    public loadViewport() {
        this.currentSmallViewContent = SmallViewContentEnum.Stopwatch;
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
        this.currentViewport = viewport;
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

        if(this.currentViewport != newViewport)
            this.updateViewport(newViewport);
    }

    /*
        Enums
    */
    public get ViewportEnum() {
        return ViewportEnum; 
    }

    public get SmallViewContentEnum() {
        return SmallViewContentEnum; 
    }

    /*
        NgIf / Hidden - Checks
    */
    public hideStopwatchContentCheck(): boolean {
        if(this.currentViewport === this.ViewportEnum.Small && this.currentSmallViewContent === this.SmallViewContentEnum.Overview)
            return true;
        else
            return false;
    }

    public hideOverviewContentCheck(): boolean {
        if(this.currentViewport === this.ViewportEnum.Small && this.currentSmallViewContent === this.SmallViewContentEnum.Stopwatch)
            return true;
        else
            return false;
    }

    public smallViewportCheck(): boolean {
        if(this.currentViewport === this.ViewportEnum.Small)
            return true;
        else
            return false;
    }
}