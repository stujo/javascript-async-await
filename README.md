


# Add WebPack

* Install webpack
  ``$ npm install --save-dev webpack``

* Create ``webpack.config.js``
  ``$ npm touch webpack.config.js``

* Install the ``babel-loader``
  ``$ npm install --save-dev babel-loader``

* Install the ``babel-polyfill`` which is required for the built javascript
  ``$ npm install --save-dev  babel-polyfill``

* Create ``webpack.config.js``:
  * Add the ``babel-loader`` and exclude ``node_modules``
  * Include ``babel-polyfill`` so that the bundle includes the polyfills

* Final ``webpack.config.js``:
```
module.exports = {
    entry: ['babel-polyfill', "./src/01-example-async-await.js"],
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    module: {
        loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
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
    "babel-polyfill": "^6.20.0",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-es2017": "^6.16.0",
    "webpack": "^1.14.0"
  }
}
```

