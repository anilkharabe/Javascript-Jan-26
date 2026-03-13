const details =  function(country){
    console.log(`I am ${this.name} and from ${this.city} and country is ${country}`)
}

let karnObj = {
    name: "Karn",
    city: "AngDesh",
}

let arjunObj = {
    name:"Arjun",
    city: 'Indraprasth',
}

details.call(arjunObj, 'India')
details.apply(arjunObj, ['India'])

let detailsMethod = details.bind(arjunObj, 'India');
console.log('100s of line')
detailsMethod()
