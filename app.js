const {app, BrowserWindow} = require('electron')
const path = require('path')
let window = null


app.once('ready', () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/icon/app-icon.png',
    show: false,
    webPreferences: {
      nodeIntegration: false,
      webSecurity: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  window.loadURL('https://www.notion.so')

  window.setMenuBarVisibility(false)

  window.once('ready-to-show', () => {
    // window.maximize()
    window.show()
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
