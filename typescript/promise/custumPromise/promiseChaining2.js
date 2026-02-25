import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm';

const TODOID = 54;

axios.get('https://jsonplaceholder.typicode.com/todos/'+ TODOID)
    .then((todoRes)=>{
        console.log('fetch the data for user:', todoRes.data.userId);

        return axios.get(`https://jsonplaceholder.typicode.com/users/${todoRes.data.userId}`)
    })
    .then((userRes)=>{
        console.log('userRes', userRes.data)
    })
    .catch((e)=>{
        console.log('e', e)
    })