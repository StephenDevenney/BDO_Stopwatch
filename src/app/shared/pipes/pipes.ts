import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({name: 'stopwatch'})
export class StopwatchPipe implements PipeTransform {
    transform(totalSeconds: number): string {
        let hours: string | number = Math.floor(totalSeconds / 3600);
        let minutes: string | number = Math.floor((totalSeconds % 3600) / 60);
        let seconds: string | number = Math.floor(totalSeconds % 3600 % 60);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if(hours >= 1){
            minutes = minutes < 10 ? "0" + minutes : minutes;
            return hours + " : " + minutes + " : " + seconds;
        }
        else
            return minutes + " : " + seconds;
    }
}