const electronify = require("electronify")
    , menu = require("electron").Menu
    ;

let app = electronify(__dirname + "/index.html", {
    frame: false
  , transparent: true
  , width: 1000
  , height: 700
});

app.on("ready", () => {
    let appMenu = require("./menu")(app, app.mainWindow);
    app.mainWindow.setMenu(menu.buildFromTemplate(appMenu));
});
