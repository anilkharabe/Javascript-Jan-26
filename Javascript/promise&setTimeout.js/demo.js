console.log(1);
console.log(2);

setTimeout(() => {
 console.log(3);
}, 0);

setTimeout(() => {
 console.log(4);
}, 100);

setTimeout(() => {
 console.log(5);
}, 0);

new Promise((resolve) => {
    console.log(6);
    resolve(console.log('promise 1'));
});

new Promise((resolve) => {
 setTimeout(() => {
   console.log(7);
       resolve(console.log('promise 2'));
 }, 0);
});

new Promise((resolve) => {
 setTimeout(() => {
   console.log(8);
    resolve(console.log('promise 3'));
 }, 100);
});

console.log(9);