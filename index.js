'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const globalShortcut = electron.globalShortcut;

var mainWindow = null;

app.on('ready', function() {
	mainWindow = new BrowserWindow({
		width: 270,
		height: 360,
		resizable: false,
	});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	// mainWindow.webContents.openDevTools();

	globalShortcut.register('ctrl+z', function() {
		if(mainWindow.isVisible()) {
			mainWindow.hide();
		} else {
			mainWindow.show();
		}
	});
});