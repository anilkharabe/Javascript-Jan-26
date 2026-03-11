import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm';

console.log('hello there, good morning');
let a =10, b =20;
let c;
c = a + b;
console.log('c', c);

axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>{
        console.log('response', response.data)
    })
    .catch((e)=>{
        console.log(e.message)
    })


// async - await

async function fetchData(){
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log('response', response.data);
    } catch (error) {
        console.log(error.message)
    }
}

fetchData()


let d = b - a;
console.log('d', d);