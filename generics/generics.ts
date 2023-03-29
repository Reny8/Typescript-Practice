// USING GENERICS CAN MAKE YOUR CODE MORE REUSABLE. BELOW IS AN EXAMPLE OF THE REPETITIVE WAY TO CREATE THE CLASS
class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}
class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

// BELOW IS THE EXAMPLE OF IMPLEMENTING GENERICS TO MAKE YOUR CODE REUSABLE
class ArrayOfItems<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}
