import { Injectable } from '@angular/core';
import { ViewportEnum } from './viewportEnum';

@Injectable()
export class ActiveViewport {
    public viewport: ViewportEnum;
}