
let nameStudent = 'Laxman'; // local
let age = 16; // local
var city = 'Mumbai'; // global

let funct = (name, age)=>{
    console.log(`hey there, my name is ${name} and my age is ${age}`)
}

// types
// no parameter
let type1 = () =>{
    console.log('calling type1');
}

// one parameter
let type2 = n =>{
    console.log(n ** 2);
}

// with one line of code

let type3 = n => console.log(n ** 2);


type3(6)

let num = 3.3;

console.log(Math.ceil(num))//3 
console.log(Math.floor(num)) //4
console.log(Math.round(num)) //4 // nearest integer number