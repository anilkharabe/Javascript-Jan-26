let arr = [10, 22, 23,1000, 44, 15, 86, 17, 100];

const students = [
  
  {
    id: 2,
    name: "Priya Patel",
    age: 22,
    grade: "B+",
    course: "Information Technology",
    isActive: true
  },
  {
    id: 3,
    name: "Rohan Mehta",
    age: 19,
    grade: "A-",
    course: "Electronics",
    isActive: false
  },
  {
    id: 1,
    name: "Aarav Sharma",
    age: 20,
    grade: "A",
    course: "Computer Science",
    isActive: true
  },
  {
    id: 4,
    name: "Sneha Verma",
    age: 21,
    grade: "B",
    course: "Mechanical Engineering",
    isActive: true
  }
];

const simpleObj = {a: 1, b: 2}


// for in  - object
for(let key in simpleObj){
    console.log('key: value', key, simpleObj[key])
}

// array
// for in for array

for(let index in arr){
    console.log('index', index);
    console.log('element', arr[index])
}


// for of

for(let num of arr){
    console.log('num', num)
}