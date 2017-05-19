# Loggester

## Install

```
npm install --save loggester
```

## Use

### NodeJS

#### In the code:

```
var loggester = require('loggester');
var log = new loggester.logger('MyModule');

function MyModule() {
  log('constructor');
}

MyModule.prototype.someMethod = function(arg) {
  log('someMethod', arg);
}

var myModule = new MyModule();
myModule.someMethod(5);
```

#### In the terminal:

```
MyModule: constructor
MyModule: someMethod 5
```

### Web

#### Insert the code

```
<script src="node_modules/loggester/loggester.js"></script>
```

#### In the code:

```
var log = new loggester.logger('MyFunction', 20);

function MyFunction() {
  log('constructor');
}

MyFunction.prototype.someMethod = function(arg) {
  log('someMethod', arg);
}

var myFunction = new MyFunction();
myFunction.someMethod(5);

var log2 = new loggester.logger('MyModule', 20);

function MyModule() {
  log('constructor');
}

MyModule.prototype.someMethod = function(arg) {
  log('someMethod', arg);
}

var MyModule = new MyModule();
MyModule.someMethod(10);
```

#### In the console:

```
 MyFunction           constructor
 MyFunction           someMethod 5
 MyModule             constructor
 MyModule             someMethod 10
```

### Production mode

```
var loggester = require('loggester');

loggester.isProd = true;
```