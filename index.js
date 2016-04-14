'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const globalShortcut = electron.globalShortcut;

var mainWindow = null;

app.on('ready', function() {
	mainWindow = new BrowserWindow({
		width: 270,
		height: 366,
		// resizable: false,
		icon: '/Users/zhouchongyang/Desktop/dog.jpg',
		title: '小狗翻译'
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