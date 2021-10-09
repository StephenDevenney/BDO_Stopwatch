import { Location } from "./locations";

export class TimeSlot {
    public dataLogId: number = 0;
    public location: Location = new Location;
    public secs: number = 0;
    public dateCreated: string = "";

    constructor(dataLogId?: number, location?: Location, secs?: number, dateCreated?: string) {
        if(secs) {
            this.dataLogId = dataLogId;
            this.location = location;
            this.secs = secs;
            this.dateCreated = dateCreated;
        }
    }
}

export class ChartVM {
    config: any;

    constructor(dataset?: Array<TimeSlot>, chartType?: string) {
        this.config = {
            type: chartType,
            data: {
                labels: dataset.map(_ => _.location.locationName),
                datasets: [
                    {
                        data: dataset.map(_ => _.secs),
                        backgroundColor: [
                            "#42A5F5",
                            "#66BB6A",
                            "#FFA726",
                            "#ff99ff",
                            "#FF5050",
                            "#9966ff",
                            "#ffff00",
                            "#33cccc"
                        ],
                        hoverBackgroundColor: [
                            "#64B5F6",
                            "#81C784",
                            "#FFB74D",
                            "#ffb3ff",
                            "#ff6666",
                            "#aa80ff",
                            "#ffff1a",
                            "#47d1d1"
                        ]
                    }
                ]
            },
            options: {
                plugins: {
                  legend: false,
                  tooltip: false,
                },
                devicePixelRatio: 2,
                tooltips: {
                    callbacks: {
                      title: function(tooltipItem, data) {
                        return data['labels'][tooltipItem[0]['index']];
                      },
                      label: function(tooltipItem, data) {
                        var totalTimeUnfiltered = data['datasets'][0]['data'][tooltipItem['index']];
                        let timeString: string = "";
                        let hourString = getHourString(totalTimeUnfiltered);
                        let minuteString = getMinuteString(totalTimeUnfiltered);
                        let secondString = getSecondsString(totalTimeUnfiltered);

                        if(hourString != null) {
                            timeString += hourString;
                            if(minuteString != null)
                                timeString += ", ";
                        }

                        if(minuteString != null) {
                            timeString += minuteString;

                            if(hourString == null && secondString != null)
                                timeString += ", " + secondString;
                        }

                        if(hourString == null && minuteString == null)
                            timeString += secondString;
                            
                        return timeString;

                        function getHourString(t: number): string | null {
                            var hours = Math.floor(t / 3600);

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
                            console.log(seconds);
                            if(seconds == 1)
                                return "1 Second";
                            else if(seconds > 1)
                                return seconds + " Seconds";

                            return null;
                        }
                            
                      },
                      afterLabel: function(tooltipItem, data) {
                        var dataset = data['datasets'][0];
                        console.log(dataset);
                        var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100);
                        return '(' + percent + '%)';
                      }
                    },
                    backgroundColor: '#FFF',
                    titleFontSize: 16,
                    titleFontColor: '#0066ff',
                    bodyFontColor: '#000',
                    bodyFontSize: 14,
                    displayColors: false
                }
            }
        };
    }
}

/*
    TODO: Fix bug after adding new entry (on hover tooltip doesnt show);
*/