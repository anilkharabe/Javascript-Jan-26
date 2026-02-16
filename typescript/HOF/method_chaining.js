let arr = [10, 22, 23, 1000, 44, 15, 86, 17, 100];

const result = arr.map((element) => {
  return element * 2;
});

const filterData = result.filter((element) => {
  return element >= 100;
});

const sorted = filterData.sort((a, b) => {
  return a - b;
});

const resultUsingChaining = arr
  .map(element => {
    return element * 2;
  })
  .filter((element) => {
    return element >= 100;
  })
  .sort((a, b) => {
    return a - b;
  })
  .every((element)=>{
    return element > 100
  })
  

console.log("result", result);
console.log("filterData", filterData);
console.log("sorted", sorted);

console.log('resultUsingChaining', resultUsingChaining)
