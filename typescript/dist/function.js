// volume of cylender
// pi * (r ** 2) * h
const PI = 3.14;
// 1
function volumeOfCylender(radius, height) {
    let result = PI * (radius ** 2) * height;
    console.log('result from function', result);
}
volumeOfCylender(7, 14);
let radius = 7;
let height = 14;
volumeOfCylender(radius, height);
// console.log('result - 1', result)
// 2. 
radius = 14;
height = 21;
volumeOfCylender(radius, height);
; // code duplication
// 1000 
// volume of sphere
function volumeOfSphereFun(radius) {
    let result = 4 / 3 * PI * (radius ** 3);
    console.log('result', result);
    // return result;
}
radius = 14;
let result = volumeOfSphereFun(radius);
console.log('result for sphere', result);
export {};
// console.log('volumeOfSphere -1', volumeOfSphere)
// radius = 19;
// volumeOfSphere = 4/3 * PI *(radius ** 3)
// console.log('volumeOfSphere -2', volumeOfSphere)
