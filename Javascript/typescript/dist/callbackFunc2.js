let square = function (num) {
    return num ** 2;
};
let cube = function (num) {
    return num ** 3;
};
// default paramater
function processNumber(callback, param = 5) {
    console.log('processNumber called');
    console.log(callback(param));
}
processNumber((num) => {
    return num ** 2;
}, 9);
processNumber(cube, 15);
