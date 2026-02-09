
var globalVar = 100;
function parent(){
    let a = 10;
    var b = 20;
    console.log('a', a) // 10
    console.log("b", b); // 20
    function child(){
        let b = 20; 
        console.log("b", b); //20

    }

    child();

}

parent();