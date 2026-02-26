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

async function promiseChaining(prdDetails) {
    try {
        const orderDetails = await addToCart(prdDetails);
        console.log('orderDetails', orderDetails);

        const placeOrderDetails =  await placeOrder(orderDetails.cartId);
        console.log('placeOrderDetails', placeOrderDetails)
        
        const paymentDetails =  await makePayment(placeOrderDetails.orderId);
        console.log('paymentDetails', paymentDetails);
    } catch (error) {
        console.log('error', error)
    }
}

promiseChaining(prd)


// use this way to write promise chaining

// addToCart(prd)
//     .then((response)=>{
//         console.log('add to card response:', response);
//         return placeOrder(response.cartId)
//     })
//     .then((placeOrderResponse)=>{
//         console.log('placeOrderResponse:', placeOrderResponse);
//         return makePayment(placeOrderResponse.orderId)
//     })
//     .then((makePaymentReponse)=>{
//         console.log("makePaymentReponse:", makePaymentReponse)
//     })
//     .catch((e)=>{
//         console.log("error found", e.message);
//     })
    
