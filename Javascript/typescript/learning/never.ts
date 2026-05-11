function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    console.log("This loop will run forever");
  }
}


throwError("An error occurred");
infiniteLoop();

