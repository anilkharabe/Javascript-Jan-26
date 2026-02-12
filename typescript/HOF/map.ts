export {}

let arr: Number[] = [10, 22, 23, 44, 15, 86, 17];
// map => it will act on every element of array and it will return new array

const doubledArray = arr.map((currentElement: number)=>{
    return currentElement * 2;
})

const tripleArray = arr.map((currentElement: number)=>{
    return currentElement * 3;
})

console.log('doubledArray', doubledArray)
console.log('tripleArray',tripleArray)

let names = ['Rahul', 'Ankita', 'Saee', 'Mahesh'];
let uppercase = names.map((currentName)=>{
    return currentName.toUpperCase()
})

console.log(uppercase);


