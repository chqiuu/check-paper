const {app,BrowserWindow} = require('electron')

app.on('ready',() => {
    let mainOption = {
        width: 1200,
        height: 600,
        webPreferences: {
            nodeIntergration: true
        }
    }
    let url = 'http://localhost:9000'
    let mainWindow = new BrowserWindow(mainOption)
    mainWindow.loadURL(url)
})