## What is ``node log cat``?
This is a useful tool for recording logs on the console or keeping log in a file.

* you can set custom color for each message type.
* you can keep reports on your own file path.
* you can filter logs in console by message type.
* you can enable/disable print date on console.
* you can check variable type.


**Installation**

`npm i --save node-log-cat`

### how to use:

##### in nodejs:
Firs create a file like `config.js`:

##### in `config.js`:
```javascript
const {LogHelper, Colors} = require('node-log-cat');

const config = {
        logPath: './LogCat.log',     //This is path of log file
        showWarning: true,           // enable/disable print warning massges.
        showError: true,             // enable/disable print Error massges. 
        showDebug: true,             // enable/disable print Debug massges.
        showInfo: true,              // enable/disable print Info massges. 
        showSuccess: true,           // enable/disable print Success massges. 
        showTypof: true,             // enable/disable print variable type.
        printDate: true,             // if printDate be true add current date befor message
        warningColor: Colors.yellow, // set Warning message color here.
        infoColor: Colors.blue,      // set Info message color here.
        debugColor: Colors.cyan,     // set Debug message color here.
        errorColor: Colors.red,      // set Error message color here.   
        successColor: Colors.green,   // set Success message color here.
        typeofColor: Colors.gray     // set Type of variable color here.
}

const Log = new LogHelper(config);
module.exports = Log;

```
now `require` config file and use methods like this:
##### in `index.js`:
```javascript
const Log = require('./config');

Log.w("This is a Warning message");
Log.i("This is a Info message");
Log.e("This is a Error message");
Log.s("This is a Success message");
Log.d("This is a Debug message");
```
### output:
<img width="477" alt="image2" src="https://user-images.githubusercontent.com/44725105/160624967-693b4ade-282d-42a2-bc02-4e56aed0da78.png">

if you change `printDate: false` in `config.js` output be lik this:
### output:
<img width="477" alt="image1" src="https://user-images.githubusercontent.com/44725105/160624895-54c602c9-4069-4b4f-a162-ab4e2653f7de.png">

for keep logs in file:
##### in index.js
```javascript
const Log = require('./config');
const {Type} = require('node-log-cat');

const message = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.';

Log.keep(message, Type.ERROR);
Log.keep(message, Type.INFO);
Log.keep(message, Type.SUCCESS);
Log.keep(message, Type.DEBUG);
Log.keep(message, Type.WARNING);
```

### output:
#### in LogCat.log
```Log
ERROR	2022-2-29 18:26:51-> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.

INFO	2022-2-29 18:26:51-> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.

SUCCESS	2022-2-29 18:26:51-> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.

DEBUG	2022-2-29 18:26:51-> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.

WARNING	2022-2-29 18:26:51-> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.

```

for print type of variable:
##### in index.js
```javascript
const Log = require('./config');

let my_var = {
        foo: "bar"
}
Log.t(my_var);

```
#### output 
```
2022-3-2 20:7:47-> object
```