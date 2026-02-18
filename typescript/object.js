const person = {
    name: 'Karn',
    age: 30,
    city: 'Mumbai'
}

const personObj = new Object()
personObj.name = 'Rahul'
personObj.city = 'Pune'

console.log('person', person);
console.log('personObj', personObj)

let usrAge = 'age'
// access
console.log(person.name);
console.log(person[usrAge]);

// add 
person.email = 'testing@gmail.com'

// delete

delete person.city

console.log('person', person)

const anotherObj = {
    name: 'Karn',
    age: 30,
    city: 'Mumbai',
    address:{
        street:'Main Road',
        pincode: 376345
    },
    getDetails: function(){
        console.log('Hey there, my name is ', this.name +' and age is ' + this.age)
    }
}

anotherObj.getDetails()

const {city, address: {pincode, street}, country = "India"} = anotherObj;
console.log('city', city)
console.log('pincode', pincode)
console.log('street', street)
console.log('country', country)


