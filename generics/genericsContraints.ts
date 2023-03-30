// THIS FILE CONTAINS EXAMPLES OF GENERIC CONTRAINTS USING TS

class Truck {
  print() {
    console.log("I am a truck");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}
function whatAreTheItems<T extends Printable>(array: T[]): void {
  array.map((item) => {
    item.print();
  });
}

whatAreTheItems<House | Truck>([
  new House(),
  new Truck(),
  new Truck(),
  new House(),
]);
