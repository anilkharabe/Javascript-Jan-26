import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm';

// fetch

console.log('hello there, good morning');
let a =10, b =20;
let c;
c = a + b;
console.log('c', c);

//promise 100 ms
axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>{
        console.log('response', response.data)
    })
    .catch((e)=>{
        console.log(e.message)
    })


let d = b - a;
console.log('d', d);