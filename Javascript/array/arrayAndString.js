const arr = [10, 20, 30, 40, 50, 20, 70];
let str = "Good Morning everyone, lets discuss about javascript";

// length
console.log("arr.length", arr.length);
console.log("str.length", str.length);

// 2. slice => it dont update original array/string
// start index => include
// end index => exclude
let sliceForArr = arr.slice(1, 3);
console.log("sliceForArr", sliceForArr);
sliceForArr = arr.slice(3, 6);

let sliceForStr = str.slice(0, 13);
console.log("sliceForStr", sliceForStr);

//3. includes (searching) => return boolean value
let isScored = arr.includes(70);
console.log("isScored", isScored);
isScored = arr.includes(200);
console.log("isScored", isScored);

let searchText = str.includes("discuss");
console.log("searchText", searchText);

searchText = str.includes("discuss   ");
console.log("searchText", searchText);

// 4. indexOf (searching, return the index) -1 if the element not found

let indexOfScore = arr.indexOf(70);
console.log("indexOfScore", indexOfScore);

indexOfScore = arr.indexOf(20);
console.log("indexOfScore 20", indexOfScore);

let indexOfChar = str.indexOf("M");
console.log("indexOfChar", indexOfChar);

indexOfChar = str.indexOf("Morning");
console.log("indexOfChar", indexOfChar);

//5 lastIndexOf(searching, return index, search start from last)
// const arr = [10, 20, 30, 40, 50, 20, 70];
let lastIndexOfScore = arr.lastIndexOf(70);
console.log("lastIndexOfScore", lastIndexOfScore);

lastIndexOfScore = arr.lastIndexOf(20);
console.log("lastIndexOfScore 20", lastIndexOfScore);

//let str = "Good Morning everyone, lets discuss about javascript";
let lastIndexOfStr = str.lastIndexOf("javascript");
console.log("lastIndexOfStr", lastIndexOfStr);


// concat => return new array => it dont modify existing array
let newODIScore = [101, 57, 120];
let newScore =  arr.concat(newODIScore);
console.log('newScore', newScore)
console.log('arr', arr)


//string
let newText = 'Todays topic is about array and string'
let updateText = str.concat('. ').concat(newText)
console.log('updateText', updateText)

let firstName = 'Shiv'
let lastName = 'Deshmukh'
let name = firstName + lastName;// concat using + symbol
console.log('name', name)

// split() + join()
// string => array

// split will convert string to array
let splitExp = updateText.split(' ')
console.log('splitExp', splitExp)

let reverse = splitExp.reverse()
console.log('reverse, ', reverse)

// join it converts from array to string
let testJoin = reverse.join(' ')
console.log('testJoin', testJoin)

// combine of split, reverse and join
// method chaining
let combinedMethods = updateText.split(' ').reverse().join(' ')
console.log('combinedMethods', combinedMethods)



