import { Pipe, PipeTransform } from "@angular/core";

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

@Pipe({name: 'statsTime'})
export class StatsTimePipe implements PipeTransform {
    transform(totalSeconds: number): string {
        let timeString: string = "";
        let dayString = getDayString(totalSeconds);
        let hourString = getHourString(totalSeconds, false);
        let minuteString = getMinuteString(totalSeconds);
        let secondString = getSecondsString(totalSeconds);

        if(dayString != null) {
            timeString += dayString;
            hourString = getHourString(totalSeconds, true);
            if(hourString != null)
                timeString += ",<br/>";
        }

        if(hourString != null) {
            timeString += hourString;
            if(minuteString != null && dayString == null)
                timeString += ",<br/>";
        }

        if(minuteString != null && dayString == null) {
            timeString += minuteString;

            if(hourString == null && secondString != null)
                timeString += ",<br/>" + secondString;
        }

        if(hourString == null && minuteString == null)
            timeString += secondString;

        if(dayString != null)
            timeString += ",<br/>(" + getHourString(totalSeconds, false) + ")";
            
        return timeString;

        function getDayString(t: number): string | null {
            var days = Math.floor(t / (3600*24));

            if(days == 1)
                return "1 Day";
            else if(days > 1)
                return days + " Days";

            return null;
        }

        function getHourString(t: number, hasDays: boolean): string | null {
            var hours = 0;
            if(!hasDays)
                hours = Math.floor(t / 3600);
            else
                hours = Math.floor((t - Math.floor(t / 86400) * 86400) / 3600);

            if(hours == 1)
                return "1 Hour";
            else if(hours > 1)
                return hours + " Hours";

            return null;
        }

        function getMinuteString(t: number): string | null {
            var minutes = Math.floor(t % 3600 / 60);

            if(minutes == 1)
                return "1 Minute";
            else if(minutes > 1)
                return minutes + " Minutes";

            return null;
        }

        function getSecondsString(t: number): string | null {
            var seconds = Math.floor(t % 3600 % 60);
            if(seconds == 1)
                return "1 Second";
            else if(seconds > 1)
                return seconds + " Seconds";

            return null;
        }
    }
}

@Pipe({name: 'totalPercentage'})
export class TotalPercentagePipe implements PipeTransform {
    transform(locationSecs: number, totalSecs: number): string {
        let percentage = ((locationSecs / totalSecs) * 100).toFixed(2);
        return percentage + "%";
    }
}