class Person{
    
    constructor(name){
        this.name = name;
    }

    setDetails(name){
        this.name = name;
    }

    getDetails(){
        return (this.name)
    }
    
}


const person1 = new Person('Rahul');

console.log('person1:', person1);
console.log(person1.getDetails()) ;

person1.setDetails('Jagdish');
console.log(person1) ;
