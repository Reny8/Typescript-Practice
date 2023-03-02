// FUNCTION ANNOTATION EXAMPLE
const add = (a: number,b:number): number => {
return a + b
}

// USING THE KEYWORD FUNCTION 
function divide(a:number, b:number): number {
return a / b
}

// USING VOID NO RETURN TYPE
const logger = (message: string): void => {
    console.log(message)
    // can return null and undefined
}

// USING NEVER MEANS THAT WE ARE NEVER GOING TO ACTUALLY REACH TO THE END OF THE FUNCTION WITHOUT RETURNING A VALUE
const throwError = (message: string): never=> {
    throw new Error(message)
}