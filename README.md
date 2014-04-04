# executable [![Build Status](https://travis-ci.org/kevva/executable.png?branch=master)](https://travis-ci.org/kevva/executable)

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

executable.sync('bash')
// => true
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
