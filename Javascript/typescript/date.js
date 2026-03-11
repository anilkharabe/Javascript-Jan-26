console.log(new Date());

// set date using number
// Jan - 0
// Dec 11
const d1 = new Date(2026, 1, 20, 9, 10, 30);
console.log('d1', d1)


// set date using string
// Jan - 1
// Dec - 12
const d2 = new Date("2026-02-20 9:15:45");
console.log('d2', d2);


// getting component of the date
// year
console.log(d2.getFullYear())
console.log(d2.getDate())
console.log(d2.getMonth())
console.log(d2.getHours())
console.log(d2.getMinutes())
console.log(d2.getSeconds())
console.log(d2.getDay())
console.log(d2.getTimezoneOffset())


console.log('---------------------------------------------');
// setting component of the date
let d3 = new Date()
console.log('d3', d3)

d3.setFullYear(2027)
d3.setMonth(3)
d3.setDate(1)
d3.setHours(12)
d3.setMinutes(30)
d3.setSeconds(0)
console.log('d3', d3)

console.log('---------------------------------------------');

let d4 = new Date();
console.log(d4.toDateString())
console.log(d4.toISOString())
console.log(d4.toLocaleDateString())
console.log(d4.toUTCString())
