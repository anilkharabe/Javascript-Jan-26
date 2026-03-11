// call, apply , bind => function sharing/ function borrowing

const person1 = {
    name:'Vishal',
    greet1: function(city, country){
        console.log(`HI, I am ${this.name} from ${city}, ${country}`)
    }
}

const person2 = {
    name:'Mayur',
}

person1.greet1("Solapur", "India");
// call
person1.greet1.call(person2, "Pune", 'UAE')

// apply 
const person3 = {
    name:'Yogesh',
}
person1.greet1.apply(person3, ["Hyderabad", 'USA']);

// bind
const person4 = {
    name:'Abhilash'
}

const borrowedFunction = person1.greet1.bind(person4);
console.log('borrowedFunction', borrowedFunction);
borrowedFunction('Delhi', 'Qatar')