# Examples

> More examples in [the test files](https://github.com/aureooms/js-functools/tree/master/test/src).

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
