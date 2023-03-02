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
const printVehicle = (vehicle: Reportable): void => {
    console.log(vehicle.summary())
}

printVehicle(oldCivic)