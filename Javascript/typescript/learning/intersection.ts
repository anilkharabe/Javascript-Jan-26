type Person = { name: string };
type Contact = { email: string };

// Intersection creates a type that MUST have both properties
type ContactPerson = Person & Contact;

const user: ContactPerson = {
  name: "Alex",
  email: "alex@example.com"
};

console.log(user); // Output: Alex