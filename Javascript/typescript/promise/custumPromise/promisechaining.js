
function userLogin() {
  return new Promise((resolve, reject) => {
    console.log("User login to system");
    resolve({ userId: 101 });
  });
}

function userData(user) {
  return new Promise((resolve, reject) => {
    console.log("User details");
    reject('ERROR OCCURED');
  });
}

function userOrders(user) {
  return new Promise((resolve, reject) => {
    console.log("Order Details");
    resolve({ orderId: 12345 });
  });
}

function makePayment(orderId) {
  return new Promise((resolve, reject) => {
    console.log("Order Payment Done..");
    resolve({ orderId, transcationId: "1ff7909mdbdbssss0fr100" });
  });
}

userLogin()
  .then((response) => {
    return userData(response.user);
  })
  .then((response) => {
    return userOrders(response.user);
  })
  .then((response) => {
    return makePayment(response.orderId);
  })
  .catch((error) => console.log( error));