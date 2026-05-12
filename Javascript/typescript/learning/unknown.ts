let valueUnknown: unknown;  // not used in live code but for learning purpose only
valueUnknown = "Hello, World!";

if(typeof valueUnknown === "string") {
    console.log(valueUnknown.toUpperCase()); // No error
}

valueUnknown = 50;

if(typeof valueUnknown === "number") {
    console.log(valueUnknown); // No error
}