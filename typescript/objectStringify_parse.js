// Javascript Object
const person = {
  name: "Karn",
  age: 30,
  city: "Mumbai",
  address:{
    street: "main Road"
  },
  college:{}
};

// JSON - server // JSON stringfy => it is in string format
const anotherPerson = '{"name":"Karn","age":30,"city":"Mumbai"}';

console.log(anotherPerson.name);

console.log(JSON.stringify(person));
console.log(JSON.parse(anotherPerson));

console.log(JSON.parse(JSON.stringify(person)))

console.log('person.city', person.city); // Mumbai
console.log('person.country', person.country); // undefined
console.log('person.address.street', person.address.street) // main Road


console.log('person.address.country', person.address.country) // undefined
console.log('person.college', person.college) //


console.log('person.college.class', person && person.college && person.college.class) // undefined

// optional chaining
console.log('person.college.class', person?.college?.class) // undefined



console.log('line after my logic')



