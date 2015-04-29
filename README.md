[js-functools](http://aureooms.github.io/js-functools)
==

Function tools for JavaScript.

```js
let j = ( a , b , c , x ) => a * x**2 + b * x + c ;
let p = partial( j , [ 5 , 4 , -1 ] ) ;
p( -1 ) ; // 5 - 4 - 1 = 0
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-functools.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-functools/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-functools.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-functools)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-functools.svg?style=flat)](http://bower.io/search/?q=aureooms-js-functools)
[![Build Status](http://img.shields.io/travis/aureooms/js-functools.svg?style=flat)](https://travis-ci.org/aureooms/js-functools)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-functools.svg?style=flat)](https://coveralls.io/r/aureooms/js-functools)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-functools.svg?style=flat)](https://david-dm.org/aureooms/js-functools#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-functools.svg?style=flat)](https://david-dm.org/aureooms/js-functools#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-functools.svg?style=flat)](https://codeclimate.com/github/aureooms/js-functools)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-functools.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-functools)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-functools.svg?style=flat)](https://github.com/aureooms/js-functools/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-functools.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-functools)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-functools
# or
jspm install npm:aureooms-js-functools
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-functools
```

### bower
```terminal
bower install aureooms-js-functools
```

### ender
```terminal
ender add aureooms-js-functools
```

### jam
```terminal
jam install aureooms-js-functools
```

### spm
```terminal
spm install aureooms-js-functools --save
```

### npm
```terminal
npm install aureooms-js-functools --save
```

## Require
### jspm
```js
let functools = require( "github:aureooms/js-functools" ) ;
// or
import functools from 'aureooms-js-functools' ;
```
### duo
```js
let functools = require( "aureooms/js-functools" ) ;
```

### component, ender, spm, npm
```js
let functools = require( "aureooms-js-functools" ) ;
```

### bower
The script tag exposes the global variable `functools`.
```html
<script src="bower_components/aureooms-js-functools/js/dist/functools.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-functools" ] , function ( functools ) { ... } ) ;
```

## Use

```js
let f = x => x + 1 ;
let g = x => 2 * x ;
let odd = compose( f , g ) ;
odd( 7 ) ; // 2 * 7 + 1 = 15

let j = ( a , b , c , x ) => a * x**2 + b * x + c ;
let p = partial( j , [ 5 , 4 , -1 ] ) ;
p( -1 ) ; // 5 - 4 - 1 = 0

let add = curry( ( x , y ) => x + y , 2 ) ;
add(2)(3) ; // 5
```

## Reference

  - https://docs.python.org/3/library/functions.html
  - https://docs.python.org/3/library/functools.html
  - https://github.com/lodash/lodash
