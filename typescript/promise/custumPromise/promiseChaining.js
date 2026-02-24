function addToCart(product){
    return new Promise((resolve, reject)=>{
        if(product){
            resolve({cartId: 101, product})
        }else{
            reject({message: 'No Product found'})
        }
    })
}

function placeOrder(cartId){
    return new Promise((resolve, reject)=>{
        if(cartId){
            resolve({orderId: 'Order-AKJDF'})
        }else{
            reject({message: 'No Order found'})
        }
    })
}

function makePayment(orderId){
    return new Promise((resolve, reject)=>{
        if(orderId){
            resolve({txnId: 'TXN-dkfyu282367ndj'})
        }else{
            reject({message: 'Payment failed'})
        }
    })
}

let prd = 'Dell Laptop';

addToCart(prd)
    .then((response)=>{
        console.log('add to cart: ', response)
    }).catch((e)=>{
        console.log("error:", e.message)
    })

let cartId = 101;

placeOrder(cartId)
    .then((response)=>{
        console.log('Place Order:', response)
    })
    .catch((e)=>{
        e.message
    })

let orderId = 'Order-AKJDF';
makePayment(orderId)
    .then((response)=>{
        console.log('payment: ', response)
    })
    .catch((e)=>{
        e.message
    })