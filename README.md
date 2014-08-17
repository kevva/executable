# executable [![Build Status](https://travis-ci.org/kevva/executable.svg?branch=master)](https://travis-ci.org/kevva/executable)

> Check if a file is executable using Node.js

## Install

```sh
$ npm install --save executable
```

## Usage

```js
var executable = require('executable');

executable('bash', function (err, exec) {
    if (err) {
        throw err;
    }
    
    console.log(exec);
    // => true
});

executable.sync('bash');
// => true
```

## CLI

```sh
$ npm install --global executable
```

```sh
Usage
  $ executable <file>

Example
  $ executable optipng
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
