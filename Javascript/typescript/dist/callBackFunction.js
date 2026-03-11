// assigning function to variable
// console.log(square(5)) ;
// console.log(square(25)) ;
// console.log(square(45)) ;
// callback function
function add(a, b) {
    return a + b;
}
// function expression
let substraction = function (a, b) {
    return a - b;
};
let multiplication = (a, b) => {
    return a * b;
};
let complexCalculation = (a, b) => {
    console.log('complex calucation', a, b);
};
// callback = takes function as param
function calculator(callback, param1, param2) {
    return callback(param1, param2);
}
console.log(calculator(add, 50, 10));
console.log(calculator(substraction, 50, 10));
console.log(calculator(multiplication, 50, 10));
calculator(complexCalculation, 10, 30);
let greet = function (name) {
    console.log('Say Hello ', name);
};
console.log('greet', greet);
function greetUser(callback, name) {
    // console.log('name', name)
    callback(name);
}
greetUser(function (name) {
    console.log('Say Hello ', name);
}, 'Amol');
export {};
