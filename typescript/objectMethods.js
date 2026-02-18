const person = {
    name: 'Karn',
    age: 30,
    city: 'Mumbai'
}

// methods
// Object.keys
console.log(Object.keys(person));

// Object.values
console.log(Object.values(person));

// Object.entries
console.log(Object.entries(person));

// assign
const target = {a: 20};
const source = {b: 30, c: 40};

// used to shadow copy
const result = Object.assign(target, source);
console.log('result', result)

Object.freeze(person);
// prevent adding / modify

Object.seal(person);
// prevet adding/removing but allow modify

person.name = 'Rahul';
person.country = 'India';

console.log('person', person);

//hasOwn => return boolean value
console.log(Object.hasOwn(person, 'name'));
console.log(Object.hasOwn(person, 'address'));

// hasOwnProperty => return boolean value
console.log(person.hasOwnProperty('age'))
console.log(person.hasOwnProperty('address'))




