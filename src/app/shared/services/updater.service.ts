import { Injectable } from '@angular/core';
import { autoUpdater } from "electron-updater";
import { remote } from 'electron';


@Injectable()
export class UpdaterService {
    public displayBasic: boolean = false;
    public basicText: string = "";
    
    constructor(){
        autoUpdater.checkForUpdates();

        autoUpdater.on('update-downloaded', (ev, info) => {
            remote.getCurrentWindow().setClosable(true);
            this.confirmUpdate();
        });
    }

    private confirmUpdate() {
        this.displayBasic = true;
    }

    public confirmedRestart() {
        autoUpdater.quitAndInstall();
    }
}

// TODO: sql script on launch to check sum of enums and check for difference then run drop-create script with updated 