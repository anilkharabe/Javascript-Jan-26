class Animal {
    constructor(_type, _canSleep){
        this.type = _type;
        this.canSleep = _canSleep;
    }

    canSleepMethod(){
        return this.canSleep;
    }
}

class Dog extends Animal {
    constructor(breed){
        super('Dog', true) // calling parent contructor

        this.breed = breed;
    }

    speak(){
        console.log(`${this.breed} barks`);
    }
}

const d1 = new Dog('German Shepherd');

d1.speak();
console.log(d1.canSleepMethod());  // parent class

