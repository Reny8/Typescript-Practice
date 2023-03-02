const carMakers = ['ford',
    'toyota', 'chevy']

const dates = [new Date(), new Date()]

// IF INITIALIZING BELOW USE : string[][] FOR AN ARRAY WITHIN AN ARRAY
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]


// HELP WITH INFERENCE WHEN EXTRACTING VALUES
const firstCar = carMakers[0]
const removeLastCar = carMakers.pop()

// HELP WITH MAP
carMakers.map((car: string): string => {
    return car
})

// FLEXIBLE TYPES
const importantDates: (string | Date)[] = [new Date()]
importantDates.push('2030-10-10')