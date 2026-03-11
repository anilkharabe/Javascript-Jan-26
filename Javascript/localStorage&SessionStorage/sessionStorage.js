sessionStorage.setItem('userName', 'Aniruddha');
sessionStorage.setItem('address', 'Pune');


const info = sessionStorage.getItem('userName');
console.log('userName', info);
sessionStorage.removeItem('userName')
sessionStorage.clear();

// console.log(sessionStorage.key(1))

const obj = {
    name:"Ram",
    city: 'Ayodhya'
}

localStorage.setItem('objectInfo', JSON.stringify(obj));

let objInfo = JSON.parse(localStorage.getItem('objectInfo'));
console.log('objInfo', objInfo)