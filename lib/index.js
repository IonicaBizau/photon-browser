const electronify = require("electronify")
    , { Menu } = require('electron')
    ;

let app = electronify(__dirname + "/index.html", {
    frame: false
  , transparent: true
  , width: 1000
  , height: 700
  , webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
});

app.on("ready", () => {
    //app.mainWindow.webContents.openDevTools()
    let appMenu = require("./menu")(app, app.mainWindow);
    app.mainWindow.setMenu(Menu.buildFromTemplate(appMenu));
});


