// let student1 = 'Amit'
// let student2 = 'Abhi'
// let student3 = 'Shubham'

// console.log(student1, student2, student3)

const studentList = ["Amit", "Abhi", "Shubham"];
console.log("studentList", studentList);

// Access 
console.log(studentList[0]);
console.log(studentList[1]);
console.log(studentList[2]);
console.log(studentList[3]);

// length
console.log(studentList.length);

// update => array, object => mutate a state => non primivite
studentList[1] = "Abhijeet";
console.log("studentList", studentList);

// const pi = 3.14;
// console.log('pi', pi)
// pi = 5.12; // reassignment
// console.log('pi', pi)

// add element to the array
// push() = add to the last of array
studentList.push('Mayur')
console.log('studentList', studentList)

// upshift()
studentList.unshift('Vishal')
console.log('studentList', studentList)

// remove element from array
// pop() => remove last element of array
studentList.pop()
console.log('studentList', studentList)

// shift() => remove first element of array
studentList.shift()
console.log('studentList', studentList)

let matrix = [
    [1, 2, 4],
    [5,6,7],
    [8,9, 10]
]