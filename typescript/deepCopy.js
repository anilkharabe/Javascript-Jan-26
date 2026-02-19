let brother = {
    fatherName: "Ram",
    address: {
        city: "pune"
    }
};


//without shallow copy
let sister = brother;

sister.fatherName = 'RamRaj';

console.log('brother', brother);

// sister.fatherName : Ramraje
// brother.fatherName: Ramraj

// shallow copy
// sister = Object.assign({}, brother)
// sister = {...brother}

// deep copy
// sister = structuredClone(brother)
sister = JSON.parse(JSON.stringify(brother))


sister.fatherName = 'Ramraje';


// after marriage = address changed
sister.address.city = "Delhi"

console.log('sister', sister);
console.log('brother', brother)

