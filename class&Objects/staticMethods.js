class Person{
    
    // constructor
    constructor(name){
        this.name = name;
    }

    // instance methods
    setDetails(name){
        this.name = name;
    }
    // instance methods
    getDetails(){
        return (this.name)
    }

    // class methods
    static getCountry(){
        return 'India'
    }
}


console.log(Person.getCountry());
