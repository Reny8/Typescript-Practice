interface Reportable {
    summary(): string
}

// OLDCIVIC STATISIFIES THE REPORTABLE INTERFACE BECAUSE IT HAS THE SUMMARY FUNCTION ALL OTHER FIELDS WILL NOT BE CHECKED
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const myDrink = {
color: 'brown',
carbonateed: true,
sugar: 40,
summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
}
}
const printSummary = (item: Reportable): void => {
    console.log(item.summary())
}

printSummary(oldCivic)
printSummary(myDrink)