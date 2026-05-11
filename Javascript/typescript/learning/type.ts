type PersonName = string;

let nameEx: string = "Alex";
let nameEx2: PersonName = "Alex";

console.log(nameEx); // Output: Alex
console.log(nameEx2); // Output: Alex

type Address = {
    city: string;
    country: string;
    pincode: number;
}

let addressEx: Address = {
    city: "New York",
    country: "USA",
    pincode: 10001
};

console.log(addressEx); // Output: { city: 'New York', country: 'USA', pincode: 10001 }