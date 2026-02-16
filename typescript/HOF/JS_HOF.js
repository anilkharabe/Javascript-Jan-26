// find
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

// greater than 20
function findMethod(){
    const result =  arr.find((element)=>{
        return element > 20
    });
    console.log('result', result)
}

function findWithObjectMethod(){
    const result =  students.find((element)=>{
        return element.age > 20
    });
    console.log('result', result)
}

// findWithObjectMethod()


// every


function everyMethod(){
    const result =  arr.every((element)=>{
        return element < 1000
    });
    console.log('result', result)
}

function everyWithObjectMethod(){
    const result =  students.every((element)=>{
        return element.isActive
    });
    console.log('result', result)
}

// everyWithObjectMethod()

//some

function someMethod(){
    const result =  arr.some((element)=>{
        return element > 50
    });
    console.log('some result', result)
}

function someWithObjectMethod(){
    const result =  students.some((element)=>{
        return element.isActive
    });
    console.log('result', result)
}

// someMethod()


// forEach

function forEachMethod(){
    arr.forEach((element)=>{
        console.log(element * 2)
    });
    console.log("result", result)
}

let studentName = [];
function forEachWithObjectMethod(){
    students.forEach((element)=>{
        studentName.push(element.name)
    });
}


forEachWithObjectMethod()
console.log('studentName', studentName)


function sort(){
    let sortedData = studentName.sort();
    console.log('sortedData', sortedData)
}
// sort()

function sortNumber(){
    let sortedData = arr.sort((a, b)=>{
        return a - b; // ascending
        return b -a; // descending
    });
    console.log('sortedData', sortedData)
}

// sortNumber()

function sortAgeOfStudents(){
    let sortedData = students.sort((a, b)=>{
        return a.name.localeCompare(b.name)
    });
    console.log('sortedData', sortedData)
}

sortAgeOfStudents()