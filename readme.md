# executable [![Build Status](https://travis-ci.org/kevva/executable.svg?branch=master)](https://travis-ci.org/kevva/executable)

> Check if a file is executable


## Install

```
$ npm install --save executable
```


## Usage

```js
const executable = require('executable');

executable('bash').then(exec => {
	console.log(exec);
	//=> true
});
```


## API

### executable(file)

Returns a promise that resolves to a boolean of whether the file is executable.

### executable.sync(file)

Returns a boolean of whether the file is executable.


## Related

* [executable-cli](https://github.com/kevva/executable-cli) - CLI for this module


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
