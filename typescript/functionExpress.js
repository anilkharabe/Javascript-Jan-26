let name = 'Ram'; // string
let age = 20;   // number

// function expression
// printName is varible, type object
let printName = function(){
    console.log(`hey there, my name is ${name} and my age is ${age}`)
}

function normalFunction(){
    console.log('calling from normal function')
}


function testing(name, age, printNameFunc, normalFunction){
    console.log('name', name);
    console.log('age', age);
    printNameFunc();
    normalFunction();
}

testing(name, age, printName, normalFunction)
