# JavaScript ES2017 Exploration

Notes on an experiment with ES2017 
  
* Using node.js runtime
* Using babel to transpile ES2017 (and ES2015)
* Review Syntax:
  * ES2017 : ``async`` ``await`` 
  * ES2015 : generator functions 

# Run Examples

This runs the webpack (including babel) build and the runs the output with node

```
$ npm run prod
```

# Samples

* ``src/01-example-async-await.js``:

```
function waiter(message){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(message);
    }, 1500);
  });
}

async function example(){
  console.log(await waiter('Hello World!'));
}

example()
```

# Add ``babel-node`` support

If you are just experimenting you can use babel-node command line tool to try out the new JavaScript features

* Install babel-cli into your project

  ``$ npm install --save-dev babel-cli``

* Install the presets

  ``$ npm install --save-dev babel-preset-es2015 babel-preset-es2017``

* Setup  babel presets Create ``.babelrc`` in the project root folder

* Final ``.babelrc``:
  
```
{ "presets": ["es2015","es2017"] }
```

* Run your script with babel-node
  
  ``$ babel-node src/01-example-async-await.js``

# Add WebPack

* Install webpack

  ``$ npm install --save-dev webpack``

* Create ``webpack.config.js``

  ``$ npm touch webpack.config.js``

* Install the ``babel-loader``

  ``$ npm install --save-dev babel-loader``

* Install ``babel-plugin-transform-runtime`` 

  ``$ npm install --save-dev  babel-plugin-transform-runtime``

* Install ``babel-runtime`` 

  ``$ npm install --save  babel-runtime``

* Create ``webpack.config.js``:

  * Add the ``babel-loader`` and exclude ``node_modules``

* Final ``webpack.config.js``:

  **Note:** ``target: 'node',`` was added to support ``fetch-everywhere``

```
module.exports = {
    entry: ['./src/index.js'],
    target: 'node',
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    module: {
        loaders: [
            {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader'
            },
            { test: /\.json$/, loader: "json-loader"}
        ]
    }
};
```

* Edit ``package.json`` for ``webpack``:

  *  Add ``npm run build`` to kick off webpack:

```
  "scripts": {
    "build": "webpack",
  },
```

  *  Add ``npm run prod`` to rebuild and execute the bundle:

```
  "scripts": {
    "prod": "npm run build && node build/bundle.js",
  },
```

  * Final ``package.json``:

  **Note:** ``fetch-everywhere`` and ``json-loader`` where added to explore ``fetch``

```
{
  "name": "javascript-async-await",
  "version": "1.0.0",
  "description": "Exploration of JavaScript which may be in ES2017",
  "main": "src/index.js",
  "scripts": {
    "build": "webpack",
    "prod": "npm run build && node build/bundle.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "example-01": "babel-node src/01-example-async-await.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/stujo/javascript-async-await.git"
  },
  "author": "stujo",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/stujo/javascript-async-await/issues"
  },
  "homepage": "https://github.com/stujo/javascript-async-await#readme",
  "devDependencies": {
    "babel-cli": "^6.18.0",
    "babel-loader": "^6.2.9",
    "babel-plugin-transform-runtime": "^6.15.0",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-es2017": "^6.16.0",
    "json-loader": "^0.5.4",
    "webpack": "^1.14.0"
  },
  "dependencies": {
    "babel-runtime": "^6.20.0",
    "fetch-everywhere": "^1.0.5"
  }
}
```
