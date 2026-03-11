// sign up
// user information collect
// name, age, address

// data for 1 user
let name = 'Sandip'
let address = 'Pune'
let age2 = 27;

// complex data
// key: value
// key=> properties
// value => data

// represents real-world entities
// api responses
// mongo db document

let student1 = {
    name: 'Sandip',
    address: 'Pune',
    age: 26
}


console.log('student1', student1)
// access => . (Dot notation), bracket notation => []
console.log('name', student1.name)
console.log('age', student1.age)
console.log('address', student1['address'])

// add new key-value to object

student1.contactNumber = '98945676334';
console.log('student1', student1)

// update existing value
student1['address'] = 'New Delhi'

console.log('student1', student1)

// delete key-value
delete student1.age;
console.log('student1', student1)

// pass by value

// pass by reference => array, object

console.log([1,2] == [1,2]) // false
console.log([] === []) //

console.log({} == {}) // false
console.log({} === {}) // false

// get by 

