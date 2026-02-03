let myNum = 12345;
let reverseNum=0; // 54321 // dont use inbuild methods

// console.log((parseInt (myNum.toString().split('').reverse().join('')))) 

while(myNum > 0){
    reverseNum = reverseNum * 10 +  (myNum % 10); 

    console.log('reverseNum', reverseNum);
    
    myNum =Math.floor( myNum / 10);
    console.log('myNum',  (myNum)) // 1234
}

console.log('reverseNum', reverseNum)