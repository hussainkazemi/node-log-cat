const color = require('colors');
const {Colors, Type} = require('./logEnum');
//for keep message in file
let keep = async function(message, type){
    const util = require('util');
    const fs = require('fs');
    const path = './LogCat.log';
    try{
        message = addTag(message, type);
        await fs.openSync(path,'r');
        await fs.appendFileSync(path, message,'utf-8')
    }catch(error){
        await fs.writeFileSync(path, message);
    }
}
//for log warning message
let w = function(message){
    message = addDateToMessage(message);
    print(message, Colors.yellow);
}
//for log info message
let i = function(message){
    print(message, Colors.blue);    
}
//for log error message
let e = function(message){
    print(message, Colors.red);
}
// for log debug message
let d = function(message){
    print(message, Colors.cyan);
}

function addDateToMessage(message){
    const date = new Date();
    const m = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}-> ${message}`;
    return m;
}

function addTag(messag, type){
    let m;
    m = addDateToMessage(messag);
    m = `${type}\t${m}\n\n`
    return m;
}

function print(message, messageColor){
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

module.exports = {
    keep,
    w,
    d,
    i,
    e
}