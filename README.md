[js-functools](http://aureooms.github.io/js-functools)
==

Function tools for JavaScript. Parent is [aureooms/js-library](https://github.com/aureooms/js-library).

```js
let j = ( a , b , c , x ) => a * x**2 + b * x + c ;
let p = partial( j , [ 5 , 4 , -1 ] ) ;
p( -1 ) ; // 5 - 4 - 1 = 0
```

[![License](https://img.shields.io/github/license/aureooms/js-functools.svg)](https://raw.githubusercontent.com/aureooms/js-functools/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-functools.svg)](https://www.npmjs.org/package/@aureooms/js-functools)
[![Build](https://img.shields.io/travis/aureooms/js-functools/master.svg)](https://travis-ci.org/aureooms/js-functools/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-functools.svg)](https://david-dm.org/aureooms/js-functools)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-functools.svg)](https://david-dm.org/aureooms/js-functools?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-functools.svg)](https://github.com/aureooms/js-functools/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-functools.svg)](https://www.npmjs.org/package/@aureooms/js-functools)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-functools.svg)](https://codeclimate.com/github/aureooms/js-functools/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-functools.svg)](https://codeclimate.com/github/aureooms/js-functools/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-functools/master.svg)](https://codecov.io/gh/aureooms/js-functools)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-functools.svg)](https://codeclimate.com/github/aureooms/js-functools/trends/technical_debt)
[![Documentation](http://aureooms.github.io/js-functools//badge.svg)](http://aureooms.github.io/js-functools//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-functools)](https://bundlephobia.com/result?p=@aureooms/js-functools)

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
jspm install npm:@aureooms/js-functools
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-functools
```

### bower
```terminal
bower install @aureooms/js-functools
```

### ender
```terminal
ender add @aureooms/js-functools
```

### jam
```terminal
jam install @aureooms/js-functools
```

### spm
```terminal
spm install @aureooms/js-functools --save
```

### npm
```terminal
npm install @aureooms/js-functools --save
```

## Require
### jspm
```js
let functools = require( "github:aureooms/js-functools" ) ;
// or
import functools from '@aureooms/js-functools' ;
```
### duo
```js
let functools = require( "aureooms/js-functools" ) ;
```

### component, ender, spm, npm
```js
let functools = require( "@aureooms/js-functools" ) ;
```

### bower
The script tag exposes the global variable `functools`.
```html
<script src="bower_components/@aureooms/js-functools/js/dist/functools.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-functools" ] , function ( functools ) { ... } ) ;
```

## Use

```js
let f = x => x + 1 ;
let g = x => 2 * x ;
let odd = compose( [ f , g ] ) ;
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
