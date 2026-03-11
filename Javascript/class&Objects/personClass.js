class Person{
    // name
    //age
    setDetails(name){
        this.name = name;
    }

    getDetails(){
        return (this.name)
    }
}


const person1 = new Person();
person1.setDetails('Rahul');
console.log('person1:', person1);
console.log(person1.getDetails()) 
