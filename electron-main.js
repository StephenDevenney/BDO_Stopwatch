'use strict';
require('dotenv').config();
// // Electron
const { app, BrowserWindow, ipcMain, shell } = require('electron');
const windowStateKeeper = require('electron-window-state');
const path = require('path');
let waitBeforeClose = true;
let mainWindow;
const devMode = /electron/.test(path.basename(app.getPath('exe'), '.exe'));
const { autoUpdater } = require("electron-updater");
let updateAvailable = false;

if (devMode) {
	// Set appname and userData to indicate development environment
	app.name = app.name + '-dev';
	app.setPath('userData', app.getPath('userData') + '-dev');

	// Temporary fix for Electron 'reload' issue
	app.allowRendererProcessReuse = false;

	// Setup reload
	require('electron-reload')(path.join(__dirname, 'dist'), {
		electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
	});
}

const createWindow = () => {
	// Window State Keeper
	let mainWindowState = windowStateKeeper({
		defaultWidth: 1300,
		defaultHeight: 700
	});

	// Create the browser window.
	mainWindow = new BrowserWindow({
		show: false,
		x: mainWindowState.x, y: mainWindowState.y,
		width: mainWindowState.width, height: mainWindowState.height,
		minHeight: 700, minWidth: 600,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
			contextIsolation: false,
			sandbox: false
		}
	});

	mainWindowState.manage(mainWindow);

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
		mainWindow.removeMenu();
	});

	// and load the index.html of the app.
	mainWindow.loadURL('file://' + __dirname + '/dist/index.html');

	// Open the DevTools.
	if (devMode && process.argv.indexOf('--noDevTools') === -1) {
		mainWindow.webContents.openDevTools();
	}

	// Emitted when the window is closed.
	mainWindow.on('closed', () => {
		mainWindow = null;
	});

	mainWindow.webContents.on('did-fail-load', () => {
		mainWindow.loadURL('file://' + __dirname + '/dist/index.html');
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// app.on('ready', createWindow);
app.on('ready', function () {
  
	createWindow();
	//Make sure in dev. enviroment, auto updater won't be called.
	if (process.env.NODE_ENV !== "dev") {
	  autoUpdater.checkForUpdates();
	  autoUpdater.autoDownload = true;
	  autoUpdater.autoInstallOnAppQuit = true;
	}
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	if(updateAvailable == true)
		autoUpdater.quitAndInstall();

	app.quit();
});

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) createWindow();
});

app.on('web-contents-created', (event, contents) => {  
	contents.setWindowOpenHandler(({ url }) => {    
		// See the following item for considerations regarding what    
		// URLs should be allowed through to shell.openExternal.    
		if (isSafeForExternalOpen(url)) {      
			setImmediate(() => {        
				shell.openExternal(url)      
			})    
		}

    return { action: 'deny' }  
	})
});
autoUpdater.on('update-downloaded', (ev, info) => {
	updateAvailable = true;
});