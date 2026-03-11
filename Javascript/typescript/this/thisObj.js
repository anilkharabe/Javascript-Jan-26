// 'use strict'
// window => global object for browser/frontend
// 1 case
console.log('windows', window)

// // 2 case
console.log('this in program', this)

// // // 3 case

function helloFunction(){
    console.log('this from helloFunction', this)
}

helloFunction();

// // // 4 case

// const obj = {
//     name: 'Rahul',
//     greet: function(){
//         console.log('calling from obj.greet', this.name);
//     }
// }

// obj.greet()
// console.log(obj.name);


// // case 5

// const nestedObj = {
//     topic: 'Javascript',
//     parent: function(){
//         let self = this;
//         function child(){
//             console.log('this from child', self) // fallback to global object
//         }

//         child()

//         console.log('calling this from nestedObj', this);
//     }
// }

// nestedObj.parent()


// // case 6

// const arrowObj = {
//     name: 'Rahul',
//     greet: function(){
//         const inner = ()=>{
//             console.log('calling from inner', this)
//         }
//         inner()
//     }
// }

// arrowObj.greet()
// console.log(arrowObj.name);


// class => this
// call/apply/bind => this

// without strict = 8
// with strict = 8