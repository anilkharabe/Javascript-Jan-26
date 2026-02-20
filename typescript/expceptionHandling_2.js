let arr = 'Tarak Mehta'; // second largest

function findSecondLargestNumber(numberOfArray) {
    
    if(!Array.isArray(numberOfArray)){
        console.log('expecting array');
        throw new Error('Input must be array')
    }

    let highestNumber = -Infinity;
    let secondHighest = -Infinity;

    for (let i = 0; i <= numberOfArray.length; i++) {
        if (highestNumber < numberOfArray[i]) {
        secondHighest = highestNumber;
        highestNumber = numberOfArray[i];
        } else if (secondHighest < numberOfArray[i] && secondHighest != highestNumber) {
        secondHighest = numberOfArray[i];
        }
    }
    console.log("highest for ", highestNumber);
    console.log("second highest", secondHighest);
}

try {
    findSecondLargestNumber(arr);
} catch (error) {
    console.error(error.message)
}


console.log('code after find out second largest number');