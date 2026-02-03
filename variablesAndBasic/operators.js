// what is operators

let sum = 5 + 10; // 15 => sum
// + is operator
// 5 and 10 operands

// types
// 1. arithmatic operators

let addition = 10 + 5;

console.log("addition", addition);

let substraction = 10 - 4;
console.log("substraction", substraction);

let multiplication = 20 * 2;
console.log("multication", multiplication);

let division = 30 / 5;
console.log("division", division);

// modulus

let modulus = 10 % 3;
console.log("modulus", modulus);

// exponent (power of something)

let exponent = 3 ** 4; // 3 * 3 * 3 * 3
console.log("exponent", exponent);

// assignment operator

let x = 10;
let y = 20;

x = x + 10; // 10 + 10 => x =20
x += 10; // 20 + 10
console.log("x", x);

y = y * 5; // 20 * 5 => 100
y *= 3; // 100 * 3 => 300
console.log("y", y);

y = x / 5;
console.log("y", y); // y = 6

// 2. Comparison operators
// boolean => true / false

// is 4 equals to 5
// ==

// let result = 4 == 5;

result = 5 == 5;

console.log("result", result);

let a = 5; // integer
let b = "5"; // string => '5' => 5
let c = "4";

let aIsEqualsTob = a == b; // true => typeCasting => converting string to number
console.log("aIsEqualsTob", aIsEqualsTob);

let strictlyEqual = a === b; // false => no typecasting => 5 not equals= '5'
console.log("strictlyEqual", strictlyEqual);

// console.log(typeof(a))
// console.log(typeof b)
// console.log(typeof(strictlyEqual))

// c is not equals to a
// c = 4, a = 5

let aIsNotEqualsToC = a !== c;
console.log("aIsNotEqualsToC", aIsNotEqualsToC);

let aIsNotEqualsToB = a !== b; // 5  '5'
console.log("aIsNotEqualsToB", aIsNotEqualsToB);

let m = 10;
let n = 15;
// greter than , greather or equal

result = n > m; // 15 > 10

console.log("result", result);
console.log("10 > 15", 10 > 15);

console.log("10 > 10", 10 >= 10); // is greater than  or is equals to

console.log("20 < 30", 20 < 30);
console.log("40 < 30", 40 < 30);
console.log("20 < 30", 20 <= 30);

// logical operators
// and or
// and => &&
// or ||

result = 5 && 4;
console.log("result", result);

// string

let age = 30;
let name = "Aniruddha";

// my name is Aniruddha and age is 30
// str
let str = "my name is " + name + " and age is" + age;
console.log("str", str);

let str2 = "my name is " + name + " and age is" + age;
console.log("str2", str2);

let str3 = `my name is ${name} and age is ${age}`; // backtick
console.log("str3", str3);

let para = `Hey there, 
I am currently WOrking with one of the MNC`;

console.log("para", para);

a = '10';
b = 20;
console.log(a + b); // +  string => concat = b is converted into string
console.log(b - a); // typecasting done by javascript -, *, => math operation => type casting => a is converted into number




