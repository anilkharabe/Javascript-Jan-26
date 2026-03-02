class Animal {
    constructor(_type, _canSleep){
        this.type = _type;
        this.canSleep = _canSleep;
    }

    canSleepMethod(){
        console.log('calling from parent')
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

    canSleepMethodFromChild(){
        console.log('calling from child ')
        return this.canSleepMethod();
    }

    canSleepMethod(){
        return super.canSleepMethod()
    }

}

const d1 = new Dog('German Shepherd');

console.log('d1', d1)

console.log(d1.canSleepMethodFromChild())

