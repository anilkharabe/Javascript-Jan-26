"use strict";
// getUser => name
// getAge => age
// getCity => city
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Aniruddha");
        }, 1000);
    });
}
function getAge(name) {
    return new Promise((resolve) => {
        console.log("fetching age for ", name);
        setTimeout(() => {
            resolve(30);
        }, 2000);
    });
}
function getCity(age) {
    return new Promise((resolve) => {
        console.log("fetching city for age", age);
        setTimeout(() => {
            resolve("Pune");
        }, 3000);
    });
}
getUser()
    .then((res) => {
    console.log("name", res);
    return getAge(res);
})
    .then((age) => {
    console.log("age", age);
    return getCity(age);
})
    .then((city) => {
    console.log("city", city);
})
    .catch((error) => {
    console.log("error", error);
});
