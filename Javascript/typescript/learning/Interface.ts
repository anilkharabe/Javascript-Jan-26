interface AddressInterface {
    city: string;
    country: string;
    pincode: number;
}

interface userInterface extends AddressInterface {
    name: string;
    email: string;
    mobile?: string; // Optional property
}

let addressInterfaceEx: AddressInterface = {
    city: "New York",
    country: "USA",
    pincode: 10001
};

let userInterfaceEx: userInterface = {
    name: "Alex",
    email: "alex@example.com",
    city: "New York",
    country: "USA",
    pincode: 10001,
    mobile: "123-456-7890"
};

console.log(userInterfaceEx); // Output: { name: 'Alex', email: '


console.log(addressInterfaceEx); // Output: { city: 'New York', country: 'USA', pincode: 10001 }