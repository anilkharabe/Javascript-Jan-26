import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm';




async function fetchData(){
    try {
        const URL = 'https://jsonplace.com/testingData';

        const response = await axios.get(URL);

        console.log('response', response)
    } catch (error) {
        console.log('error', error.message)
    }
}

fetchData();