const LogHeloper = require('./log-cat/logHelper')
const {Colors, Type} = require('./log-cat/logEnum');
const config = {
    logPath: "./LogCat.log",
    printDate: false,
    showWarning: false,
    showError: true,
    showDebug: false,
    showInfo: true,
    warningColor: Colors.yellow,
    infoColor: Colors.blue,
    debugColor: Colors.cyan,
    errorColor: Colors.red
}
const Log = new LogHeloper(config);


module.exports = Log;