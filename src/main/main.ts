import { app, BrowserWindow } from 'electron';
import path from 'path';

const createWindow = () => {
	const win: BrowserWindow = new BrowserWindow({
		width: 1000,
		height: 750,
		minWidth: 900,
		minHeight: 750,
		show: false,
		autoHideMenuBar: true,
		backgroundColor: '#27272a',
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	app.isPackaged ? win.loadFile('renderer/index.html') : win.loadURL('http://localhost:3000');

	win.once('ready-to-show', () => {
		win.show();
	});
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
