class Vehicle {
    constructor(public color: string) { }

    protected honk(): void {
        console.log("Beep")
    }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

// BASIC INHERITANCE
class Car extends Vehicle {
    constructor(color: string, public wheels: number) {
        super(color)
    }
    // OVERRIDING FUNCTION FOR THE CHILD CLASS
    private drive(): void {
        console.log("You are now driving")
    }
    startDrivingProcess(): void {
        this.drive()
        // SINCE PROTECTED CAN BE USED FOR INSIDE PARENT AND CHILD
        this.honk()
    }
}

const car = new Car('red', 4)
car.startDrivingProcess()