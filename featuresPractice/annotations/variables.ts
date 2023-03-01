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

// FUNCTION ANNOTATION
// WHAT ARGUMENTS THE FUNCTION WILL TAKE AND WHAT TYPES WILL BE RETURNED
// EXAMPLE THAT TAKES IN A NUMBER AND RETURNS NOTHING
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// WHEN TO USE ANNOTATIONS
// [1] FUNCTION THAT RETURNS THE ANY TYPE
const json = '{"x": 10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// [2] WHEN WE DECLARE A VARIABLE ON ONE LINE AND INITIALIZE LATER ON
const words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
