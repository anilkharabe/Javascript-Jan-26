let karnObj = {
    name: "Karn",
    city: "AngDesh",
    details: function(country){
        console.log(`I am ${this.name} and from ${this.city} and country is ${country}`)
    }
}

let arjunObj = {
    name:"Arjun",
    city: 'Indraprasth',
}

karnObj.details('Bharat')
karnObj.details.call(arjunObj, 'India')
karnObj.details.apply(arjunObj, ['India'])

let detailsMethod = karnObj.details.bind(arjunObj, 'India');
console.log('100s of line')
detailsMethod()
