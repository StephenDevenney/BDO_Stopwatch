import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable()
export class LoadingService {
    private loading: boolean = false;
    private opacityShow: boolean = false;
    private hasError: boolean = false;
    
    constructor(private loader: NgxUiLoaderService){

    }

    public start(taskId?: string): void {
        this.loading = true;
        if(!!taskId && taskId != "") 
            this.loader.startLoader(taskId);
        else 
            this.loader.start();

        this.opacityShow = true;
        this.hasError = false;
    }

    private isError(): boolean {
         return this.hasError;
    }

    public stop(taskId?: string): void {
        if(!!taskId && taskId != "")
            this.loader.stopLoader(taskId);
        else
            this.loader.stop();

        this.loading = false;
        this.opacityShow = false;
        this.hasError = false;
    }

    public startBackground(taskId?: string): void {
        this.loading = true;
        if(!!taskId && taskId != "") 
            this.loader.startBackground(taskId);
        else 
            this.loader.startBackground();

        this.opacityShow = true;
        this.hasError = false;
    }

    public stopBackground(taskId?: string): void {
        if(!!taskId && taskId != "")
            this.loader.stopBackground(taskId);
        else
            this.loader.stopBackground();

        this.loading = false;
        this.opacityShow = false;
        this.hasError = false;
    }

    private errorOccured(): void {
        this.loading = false;
        this.hasError = true;
    }
}