"use strict";
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        console.log("This loop will run forever");
    }
}
throwError("An error occurred");
infiniteLoop();
