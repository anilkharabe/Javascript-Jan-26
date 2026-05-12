"use strict";
let numArray = [1, 2, 3, 4, 5];
let nameArr = ["Nikita", "Priyanka", "Pravin", "Shubham", "BHagyashri", "Harshada", "Shital", "Rohit"];
function getNumber(arr) {
    return arr[0];
}
function getName(arr) {
    return arr[0];
}
function genericFunction(arr) {
    return arr[0];
}
console.log(getNumber(numArray));
console.log(getName(nameArr));
// generics function
console.log(genericFunction(numArray));
console.log(genericFunction(nameArr));
