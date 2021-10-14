import { Component, HostListener, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Settings } from '../server/src/settings';
import { TheDb } from '../server/src/thedb';
import * as fs from 'fs';
import { remote, SaveDialogSyncOptions } from 'electron';
import { Title } from '@angular/platform-browser';
import { BaseComponent } from './shared/components/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends BaseComponent {
    private title = 'BDO Stopwatch';
    private isLoaded = false;
    private innerWidth: any;
    private displayBasic: boolean = false;
    private basicText: string = "";

    constructor(private injector: Injector,
                private route: ActivatedRoute,
                private titleService: Title) {

        super(injector);

        Settings.initialize();
        if (fs.existsSync(Settings.dbPath)) {
            this.openDb(Settings.dbPath);
        } else if (Settings.hasFixedDbLocation) {
            this.createDb(Settings.dbPath);
        } else {
            this.createDb();
        }
    }

    @HostListener('window:resize', ['$event'])
    private onResize(event: any) {
        this.innerWidth = window.innerWidth;
        this.viewService.determineViewport(window.innerWidth, window.innerHeight);
    }

    private openDb(filename: string) {
        TheDb.openDb(filename)
        .then(() => {
            if (!Settings.hasFixedDbLocation) {
                Settings.dbPath = filename;
                Settings.write();
            }
        })
        .then(() => {
          this.loadApplication();
        })
        .catch((reason) => {
            // Handle errors
            console.log('Error occurred while opening database: ', reason);
        });
    }

    private async createDb(filename?: string) {
        if (!filename) {
            const options: SaveDialogSyncOptions = {
                title: 'Create file',
                defaultPath: remote.app.getPath('documents'),
                filters: [
                    {
                        name: 'Database',
                        extensions: ['db'],
                    },
                ],
            };
            filename = remote.dialog.showSaveDialogSync(remote.getCurrentWindow(), options);
        }

        if (!filename) {
            return;
        }

        TheDb.createDb(filename)
        .then((dbPath) => {
            if (!Settings.hasFixedDbLocation) {
                Settings.dbPath = dbPath;
                Settings.write();
            }
        })
        .then(() => {
          this.loadApplication();
        })
        .catch((reason) => {
            console.log(reason);
        });
    }

    private async loadApplication() {
        this.titleService.setTitle(this.title);
        this.viewService.loadViewport();
        this.isLoaded = true;
        await this.router.navigate(["page"]);
    }
}
