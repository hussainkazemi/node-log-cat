const LogHeloper = require('./log-cat/logHelper')
const {Colors} = require('./log-cat/logEnum');
const config = {
    logPath: "./LogCat.log",
    printDate: true, 
    showWarning: true,
    showError: true,
    showDebug: true,
    showInfo: true,
    showSuccess: true,
    warningColor: Colors.yellow,
    infoColor: Colors.blue,
    debugColor: Colors.cyan,
    errorColor: Colors.red,
    successColor: Colors.green
}
const Log = new LogHeloper(config);


module.exports = Log;