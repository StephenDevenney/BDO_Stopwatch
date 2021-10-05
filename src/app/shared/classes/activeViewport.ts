import { Injectable } from '@angular/core';
import { ViewEnum } from './viewEnum';
import { ViewportEnum } from './viewportEnum';

@Injectable()
export class ActiveViewport {
    public viewport: ViewportEnum;
    public view: ViewEnum;
}