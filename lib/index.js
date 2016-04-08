const electronify = require("electronify")
    , menu = require("menu")
    ;

let app = electronify(__dirname + "/index.html", {
    frame: false
  , width: 1000
  , height: 700
});

app.on("ready", () => {
    let appMenu = require("./menu")(app, app.mainWindow);
    app.mainWindow.setMenu(menu.buildFromTemplate(appMenu));
});
