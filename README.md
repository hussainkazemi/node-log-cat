## what is ``node log cat``
This is a useful tool for recording logs on the console or keeping log in a file.

* you can set custom color for each message type.
* you can keep reports on your own file path.
* you can filter logs in console by message type.
* you can enable/disable print date on console.


**Installation**

`npm i --save node-log-cat`

### how to use:

##### in nodejs:
Firs create a file like `config.js`:

##### in `config.js`:
```
const {LogHelper, Colors} = require('node-log-cat');

const config = {

}

const Log = new LogHelper(config);
```
now `require` config file and use methods like thisl:
##### in `index.js`:
```
const Log = require('./config');

Log.w("This is a Warning message");
Log.i("This is a Info message");
Log.e("This is a Error message");
Log.s("This is a Success message");
Log.d("This is a Debug message");
```
### output:


if you change `printDate: flase` in `config.js` output be lik this:
### output:



