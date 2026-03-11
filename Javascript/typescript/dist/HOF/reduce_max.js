const numbers = [-384, -87, -21, 12, 1276, 247, 1625, -3437, 623, 98, 623, -87, 27, 87, 247, 12, -21];
function findMax() {
    const max = numbers.reduce((currentMax, currentElement) => {
        if (currentElement > currentMax) {
            currentMax = currentElement;
        }
        return currentMax;
    }, -Infinity);
    return max;
}
// count occurrences 
// let objEx = {
//     'name':'Rushi',
//     'age': 20
// }
// if(objEx['name']){
//     console.log(objEx['name'])
// }
// if(objEx['city']){
//     console.log('Pune')
// }
/*
expected object

{
  -387: 1,
  -87: 2,
  -21: 2
}


*/
function countOccurrence() {
    const repeatedNumberObj = numbers.reduce((acc, currentElement) => {
        if (acc[currentElement]) {
            acc[currentElement] += 1;
        }
        else {
            acc[currentElement] = 1;
        }
        return acc;
    }, {});
}
