let a = {
    name:'Ram',
    city: 'Ayodya',
    address : {
        pincode: '762354'
    }
}

let b = a;



b.name = 'Laxman'
console.log('a', a);
console.log('b', b);

// shallow copy

// let c = Object.assign({}, a);

// c.name = 'Bharat';
// c.address.pincode = '100000'

// deep copy

// let c = structuredClone(a);
let c = JSON.parse(JSON.stringify(a))
c.name = 'Bharat';
c.address.pincode = '100000'

console.log('a', a);
console.log('b', b);
console.log('c', c)