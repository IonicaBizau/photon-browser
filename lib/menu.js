"use strict";

const electronify = require("electronify")
    , { BrowserWindow, Menu } = require("electron")
    ;

module.exports = function menu (app, mainWindow) {

    var menu = [
        {
            label: "Browser"
          , submenu: [
                {
                    label: "Open"
                  , click: function () {
		        mainWindow.webContents.executeJavaScript(
                            `prompt('Open', 'New url:', function (src) {
                                browser.setAttribute('src', src);
                            });`
                        )
                    }
                }
              , {
                    type: "separator"
                }
              , {
                    type: "separator"
                }
              , {
                    label: "Quit"
                  , accelerator: "Command+Q"
                  , click: function () { app.quit() }
                }
            ]
        }
      , {
            label: "Development"
          , submenu: [
                {
                    label: "Open Developer Tools"
                  , click: function () { mainWindow.openDevTools(); }
                }
              , {
                    label: "Reload"
                  , click: function () { mainWindow.reload(); }
                }
            ]
        }
      , {
            label: "Help"
          , submenu: [
                {
                    label: "Repository"
                  , click: function () { require("shell").openExternal("http://github.com/IonicaBizau/photon-browser") }
                }
            ]
        }
    ];

    return menu;
};
