function addToCart(product){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(product){
                resolve({cartId: 101, product})
            }else{
                reject({message: 'No Product found'})
            }
        }, 4000)
    })
}

function placeOrder(cartId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(cartId){
                resolve({orderId: 'Order-AKJDF'})
            }else{
                reject({message: 'No Order found'})
            }
        }, 3000)
    })
}


function makePayment(orderId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(orderId){
                resolve({txnId: 'TXN-dkfyu282367ndj'})
            }else{
                reject({message: 'Payment failed'})
            }
        }, 2000)
    })
}

let prd = 'Dell Laptop';

// use this way to write promise chaining

addToCart(prd)
    .then((response)=>{
        console.log('add to card response:', response);
        return placeOrder(response.cartId)
    })
    .then((placeOrderResponse)=>{
        console.log('placeOrderResponse:', placeOrderResponse);
        return makePayment(placeOrderResponse.orderId)
    })
    .then((makePaymentReponse)=>{
        console.log("makePaymentReponse:", makePaymentReponse)
    })
    .catch((e)=>{
        console.log("error found", e.message);
    })
    

// wrong way of writing the code for promise chaining
// it is making paramid of doom
// it is looking similiar with callback hell

addToCart(prd)
    .then((response)=>{
        console.log('add to cart: ', response.cartId)
        let cartId = response.cartId;
        placeOrder(cartId)
            .then((response)=>{
                console.log('Place Order:', response)
                makePayment(response.orderId)
                    .then((response)=>{
                        console.log('payment: ', response)
                    })
                    .catch((e)=>{
                        console.log(e.message)
                    })
            })
            .catch((e)=>{
                console.log(e.message)
            })
    }).catch((e)=>{
        console.log("error:", e.message)
    })



// let orderId = 'Order-AKJDF';
