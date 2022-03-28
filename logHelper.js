const color = require('colors');
const {Colors} = require('./logEnum');
module.exports = class LogHeloper {
    constructor(configObject){
        this.path         = configObject.logPath;
        this.showWarning  = configObject.showWarning;
        this.showError    = configObject.showError;
        this.showDebug    = configObject.showDebug;
        this.showInfo     = configObject.showInfo;
        this.showSuccess  = configObject.showSuccess;
        this.printDate    = configObject.printDate;
        this.warningColor = configObject.warningColor;
        this.infoColor    = configObject.infoColor;
        this.debugColor   = configObject.debugColor;
        this.errorColor   = configObject.errorColor;
        this.successColor = configObject.successColor;
    }

    keep = async function(message, type){
        const fs = require('fs');
        const path = this.path;
        try{
            message = this.addTag(message, type);
            await fs.openSync(path,'r');
            await fs.appendFileSync(path, message,'utf-8');
        }catch(error){
            await fs.writeFileSync(path, message);
        }
    }

    //for log warning message
    w(message){
        if(this.showWarning){
            message = this.addDateToMessage(message);
            this.print(message, this.warningColor);
        }
    }
    //for log info message
    i(message){
        if(Boolean(this.showInfo)){
            message = this.addDateToMessage(message);
            this.print(message, this.infoColor);    
        }
    }
    e(message){
        if(Boolean(this.showError)){
            message = this.addDateToMessage(message);
            this.print(message, this.errorColor);
        }
    }

    // for log debug message
    d(message){
        if(Boolean(this.showDebug)){
            message = this.addDateToMessage(message);
            this.print(message, this.debugColor);
        }
    }

    //for log success message
    s(message){
        if(Boolean(this.showSuccess)){
            message = this.addDateToMessage(message);
            this.print(message, this.successColor);
        }
    }

    addDateToMessage(message, force){
        let m;
        if (Boolean(this.printDate)|| Boolean(force)){
            const date = new Date();
            m = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}-> ${message}`;
        }else {
            m = message;
        }
        return m;
    }
    
    addTag(messag, type){
        let m;
        m = this.addDateToMessage(messag, true);
        m = `${type}\t${m}\n\n`
        return m;
    }
    
    print(message, messageColor){
        var printedMessage;
        switch(messageColor){
            case Colors.blue:
                printedMessage = color.blue(message);
            break;
            case Colors.green:
                printedMessage = color.green(message);
            break;
            case Colors.yellow:
                printedMessage = color.yellow(message);
            break;
            case Colors.cyan:
                printedMessage = color.cyan(message);
            break;
            case Colors.black:
                printedMessage = color.black(message);
            break;
            case Colors.grey:
                printedMessage = color.gray(message);
            break;
            case Colors.gray:
                printedMessage = color.gray(message);
            break;
            case Colors.white:
                printedMessage = color.white(message);
            break;     
            case Colors.red: 
                printedMessage = color.red(message);
            break;
            
        }
        console.log(printedMessage);
    }

}