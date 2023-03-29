// THIS FILE CONTAINS EXAMPLES OF GENERIC CONTRAINTS USING TS

class Car {
  print() {
    console.log("I am a car");
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

whatAreTheItems<House | Car>([new House(), new Car(), new Car(), new House()]);
