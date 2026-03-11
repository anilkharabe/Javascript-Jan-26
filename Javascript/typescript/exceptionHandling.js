
const person = 'invalid';

// expection handling

try{
    let parsePerson = JSON.parse(person); // broken
}catch(error){
    console.log("error occured: ",error.message)
}


console.log(person.name);
console.log(person.age);


const student = {
  name: "Karn",
  age: 30,
  city: "Mumbai",
  address:{
    street: "main Road"
  }
};

try {
    console.log('person.college.class', student.college.class) // undefined
    
} catch (e) {
    console.log('msg: ',e.message);
    student.college = {} // not good way of writing a code
}

console.log('person.college.class', student.college.class)
