// ... => rest and spread operator

// rest operator (...)
// collect multiple elements into single unit (array/object)


function sum(a, b ,c , ...numbers){
    console.log(a)
    console.log(b)
    console.log(c)

    console.log(numbers);
    return numbers.reduce((acc, currentElement)=>{
        return acc + currentElement
    }, 0)
}

console.log(sum(1, 2, 3, 5, 10, 15, 100, 1000));


// use case 2

const colors = ['red', 'yellow', 'green', 'blue'];

// destructuing array
const [first, second, ...others] = colors;
console.log('first', first);
console.log('second', second);
console.log('others', others);

// object destructuring 

const user = {
    id:1,
    name:'Sumit',
    age: 20,
    city:'Pune'
}

const {id, name, ...otherData} = user;


console.log('id', id);
console.log('name', name);
console.log('otherData', otherData)


// spread operator (...)
// expands elements from the array/object into individual values

console.log(...colors)


const findMaxArray = [4, 2, 6, 100, 32];

console.log(Math.max(...findMaxArray));

// combining arrays

const array1 = [1, 2];
const array2 = [3, 4];

const combineArray = [...array1, ...array2, ...[5,6,7,8]];
console.log('combineArray', combineArray)


// object expanstion

const userData = {
    id:1,
    name:'Sumit',
    age: 20,
    city:'Pune'
}

const {id: userId, name: userName} = userData;

console.log('userId', userId);
console.log('userName', userName)


function addingNumbers(a, b, c){
    return a + b + c;
}

const nums = [2, 3, 4];
console.log(addingNumbers(...nums)) 

// merge two object using spread operator
const obj1 = {
    a: 1,
    c: 10
}

const obj2 = {
    b: 2,
    c: 20
}

const mergeObj = {...obj1, ...obj2};
console.log('mergeObj', mergeObj)


// rest => pact values into one place
// spread => unpact values from one place