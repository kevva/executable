# executable [![Build Status](https://travis-ci.org/kevva/executable.svg?branch=master)](https://travis-ci.org/kevva/executable)

> Check if a file is executable using Node.js.

## Getting started

```bash
$ npm install --save executable
```

## Usage

```js
var executable = require('executable');

executable('bash', function (err, exec) {
    console.log(exec);
    // => true
});

executable.sync('bash');
// => true
```

## CLI

```bash
$ npm install --global executable
```

```bash
Usage
  $ executable <file>

Example
  $ executable optipng
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
