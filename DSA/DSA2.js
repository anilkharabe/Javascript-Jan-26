let nested = [
  [1, 2, 87, [873, 236, 153, 89]], //0
  [3, 87, 294, 4], //1
  [5, 6, 398, 3452], //2
  [634, 9826, 1256, 90], //3
];

console.log(nested[3][2]);

let flatten = [];

// flatten = nested.flat()

for (let i = 0; i < nested.length; i++) {
  for (let j = 0; j < nested[i].length; j++) {
    console.log(`i:${i}, j: ${j}`, nested[i][j])
    flatten.push(nested[i][j]);
  }
}

console.log("flatten", flatten);
