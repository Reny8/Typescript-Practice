import "reflect-metadata";

const plane = {
  color: "red",
};

// THIS IS ADDING IN A NEW PROPERTY TO PLACE CALLED NOTE WITH THE VALUE OF HI THERE
// plane = {
// color: 'red',
// note: 'Hi There
// }
// THIS PROPERTY WILL NOT APPEAR IN THE DEBUGGER. IT IS BASICALLY AN INVISIBLE PROPERTY
Reflect.defineMetadata("note", "Hi There", plane, "color");
const note = Reflect.getMetadata("note", plane, "color");
console.log(note);
