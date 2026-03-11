let a = 10;
let b = 20;
var test = 100;

function sayHello(){
    let a =20;    
    console.log('a', a); //10
    console.log('test', test)


    function childFunc(){
        let c = 30; // local scope
        var x = 50;
        console.log("child:", a) // 20
        console.log('b', b) // 20
    }


    childFunc()
    console.log('x', x); // error

}

sayHello();