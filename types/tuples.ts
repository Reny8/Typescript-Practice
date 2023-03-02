const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// CONSISTENT ORDERING OF ELEMENTS PROVIEDED THESE VALUE ANNOTATIONS TURNS THIS ARRAY INTO A TUPLE
const pepsi: [string, boolean, number] = ['brown', true, 40]

// TYPE ALIAS EXAMPLE
type Drink = [string, boolean, number]
const cocaCola: Drink = ['brown', true, 40]