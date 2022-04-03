const {LogHelper, Colors} = require('./../index');

const config = {
	        logPath: './LogCat.log',
	        showWarning: true,    
	        showError: true,        
	        showDebug: true,         
	        showInfo: true,           
	        showSuccess: true,        
	        showTypof: true,          
	        printDate: false,           
	        warningColor: Colors.yellow,
	        infoColor: Colors.blue,    
	        debugColor: Colors.cyan,    
	        errorColor: Colors.red,        
	        successColor: Colors.green,  
	        typeofColor: Colors.gray   
}

const Log = new LogHelper(config);
module.exports = Log;
