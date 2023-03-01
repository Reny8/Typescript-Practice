// VARIABLE ANNOTATIONS TO TELL TYPESCRIPT TO ASSIGN A CERTAIN TYPE
let apples: number = 5;
let spped: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// BUILT IN OBJECTS
let now: Date = new Date();

// ARRAY ANNOTATION
// FOR AN ARRAY OF STRINGS
let colors: string[] = ['red', 'green', 'blue'];
// FOR AN ARRAY OF NUMBERS
let numbers: number[] = [1, 2, 3, 4, 5];
// FOR AN ARRAY OF BOOLS
let truths: boolean[] = [true, true, false];

// CLASS ANNOTATIONS
class Car {}
let car: Car = new Car();

// OBJECT LITERAL ANNOTATION
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
