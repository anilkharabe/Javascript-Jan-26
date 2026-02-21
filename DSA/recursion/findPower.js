function findPower(base, result, power = 0){    
    if(result == 1){
        return power;
    }

    if(result % base !== 0){
        return 'wrong result'
    }

    return findPower(base, result/base, power + 1)
}
console.log(findPower(3, 81))