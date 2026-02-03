// falsey values
// 0, NaN, undefined, '', -0, false, null => false

console.log(0 === 0)

console.log("0 == '0'", 0 == '0') // '0' => 0

console.log('false == 0', false == 0); // ==> number / boolean
// number => falsy 0, truly 1
// Boolean => false , true

console.log('"" === 0', '0' == 0) //coersion false == false
// '', 0 => boolean
console.log('false == false', false == false);

console.log('undefined == 0', undefined == 0)

console.log('null == false', null == false)

console.log('NaN == ""', NaN == '')

console.log('{} == {}', {} =={})

console.log(typeof null)
console.log(typeof undefined)
console.log(typeof NaN)
console.log(typeof {})

console.log('NaN == ""', NaN == '')
