const studentList = ["Amit", "Abhi", "Shubham"];
console.log("typeof studentList", typeof studentList);

// check the type if Array
let type = Array.isArray(studentList);
console.log("type", type);

// slice + splice

const numbers = [10, 20, 30, 40, 50, 60, 70];
// slice (starIndex, endIndex) endIndex is excluded
// Extract a portion of an array
// original array: DO NOT CHANGE ORIGINAL ARRAY
let sliceEx = numbers.slice(1, 4);
console.log('sliceEx', sliceEx)

// splice
// add / remove / replace the element of array
// MODIFY THE ORIGINAL ARRAY
// startIndex, deleteCount, item1, item2, item3....

// 1. Remove
let removed = numbers.splice(1, 2);
console.log('removed', removed);
console.log('numbers', numbers)

// 2. Add
let add = numbers.splice(1, 0, 15, 25, 35)
console.log('add', add);
console.log('after add numbers', numbers)

// 3. update => first delete then add
let update = numbers.splice(4, 4, 45, 55, 65, 75)
console.log('update', update);
console.log('after update numbers', numbers)



