/*

a = '10';
b = 20;
console.log(a + b); // +  string => concat = b is converted into string
console.log(b - a); // typecasting done by javascript -, *, => math operation => type casting => a is converted into number
console.log(typeof a)
console.log(typeof b)
console.log(Number(a) + b) //30 manual type casting

*/
// falsy values

let x = 10;
console.log(String(x));
console.log(Boolean(x))

// falsy values => false, 0, -0, "", null, undefined, NaN
// when you convert these vales in boolean you will receive false value

// truly values => other than false values
//truly values => when you convert these vales in boolean you will receive true value
x = 0; // number
console.log("Boolean(x)", Boolean(x))

x = '0' // string
console.log("Boolean(x) string", Boolean(x))

console.log(Boolean(" "))


// and // or

let userName = 'aniket@gmail.com'
let password = 'passowrd'
let role = 'admin'

// login

let dbUserName = 'aniket@gmail.com'
let dbPassword = 'passowrd'
let dbRole = 'user'
// and => &&
// or => ||

let isValidUser = userName === dbUserName && password === dbPassword || role === dbRole;
console.log("isValidUser", isValidUser)



console.log("true && true", true && true) // true
console.log("false && true", false && true) // false
console.log("true && false", true && false) // false
console.log("true && true", false && false) // false

console.log("true || true", true || true) // true
console.log("false || true", false || true) // true
console.log("true || false", true || false) // true
console.log("true || true", false || false) // false

console.log("true && true || true", true && true || true) // true
console.log("true && true || false", true && true || false) // true
console.log("true || true && true", true || true && false) // false
console.log("true || true && true", false || true && true) // 

// 2 is truly value

console.log("2 && 6", 2 && 6) // 6
console.log("2 && 6", undefined && 6) // undefined

console.log("5 && 10 || 20", 10 && 5 || 20) // => truly value

console.log("5 && 10 || 20", 10 || 5 || 20) // 10

console.log("5 || 10 && 20", 10 || 5 && 20)  //10

console.log("5 || 10 && 20", 5 || 15 && 30 )   //10 =>  5 || 30 => 5

