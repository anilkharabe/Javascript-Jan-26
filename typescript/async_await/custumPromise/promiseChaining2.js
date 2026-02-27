import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm';

const TODOID = 54;
const URL = 'https://jsonplaceholder.typicode.com/';

    
let fetchInformation = async ()=>{
    try {
        let todoRes = await  axios.get(URL +'todos/'+ TODOID);

        let userInfo = await axios.get(`${URL}users/${todoRes.data.userId}`);

        console.log('userInfo', userInfo.data);
    } catch (error) {
        console.log('error', error)
    }
}


fetchInformation()

// axios.get(URL +'todos/'+ TODOID)
//     .then((todoRes)=>{
//         console.log('fetch the data for user:', todoRes.data.userId);

//         return axios.get(`${URL}users/${todoRes.data.userId}`)
//     })
//     .then((userRes)=>{
//         console.log('userRes', userRes.data)
//     })
//     .catch((e)=>{
//         console.log('e', e)
//     })