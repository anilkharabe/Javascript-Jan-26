// 5
//4
//3
//2
//1
function printNumber(n){
    if(n == 0) {
        return
    }
    console.log(n)
    printNumber(n-1)
    console.log('n', n)
}

printNumber(5)
