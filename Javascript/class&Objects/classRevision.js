class SuperUser {

    constructor(name, address){
        console.log('this is parent constructor')
        this.name = name;
        this.address = address;
    }

    getData(){
        return{
            name:this.name,
            address: this.address
        }
    }
}

// 12 th
class Admin extends SuperUser{
    constructor(name, address){
        super(name, address)
    }

    isAdmin(){
        return true;
    }

    static count(){
        return 'testing';
    }
}

console.log(Admin.count())

// instance of class User
// it will call constructor automatically
const user1 = new SuperUser('Aniruddha', 'Jalna');
// user1.isAdmin()


const admin1 = new Admin('Amar', 'Pune');
console.log(admin1.getData()) 
console.log(admin1.isAdmin())


console.log('admin1', admin1)


console.log("user1", user1);

console.log(user1.getData())

// SOLID Principles
// S D => scalable