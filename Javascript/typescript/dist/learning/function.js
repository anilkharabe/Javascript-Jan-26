"use strict";
function func() {
    console.log("This is a function");
}
function sum(a, b, c) {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}
func();
console.log(sum(5, 10, 20)); // Output: 15
