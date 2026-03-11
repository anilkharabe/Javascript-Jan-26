import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm';

const requestToserver =  axios.get('https://jsonplace.com/testingData');

console.log('requestToserver', requestToserver)

requestToserver.then((response)=>{
        console.log('response', response.data)
    })
    .catch((err)=>{
        console.log('error while making requres: ', err.message)
    })