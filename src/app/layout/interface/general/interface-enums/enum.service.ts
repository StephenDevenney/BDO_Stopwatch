import { Injectable } from '@angular/core';
import { ButtonIconEnum, ButtonTypeEnum } from './enums/button';

@Injectable()
export class InterfaceEnumService {
    
    constructor(){

    }

    public get ButtonTypeEnum() {
        return ButtonTypeEnum; 
    }

    public get ButtonIconEnum() {
        return ButtonIconEnum; 
    }
}