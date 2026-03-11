// call, apply , bind => function sharing/ function borrowing

const greet = function(city, country){
    console.log(`HI, I am ${this.name} from ${city}, ${country}`)
}

const person2 = {
    name:'Mayur',
}

// call
greet.call(person2, "Pune", 'UAE')

// apply 
const person3 = {
    name:'Yogesh',
}
greet.apply(person3, ["Hyderabad", 'USA']);

// bind
const person4 = {
    name:'Abhilash'
}

const borrowedFunction = greet.bind(person4);
console.log('borrowedFunction', borrowedFunction);
borrowedFunction('Delhi', 'Qatar')