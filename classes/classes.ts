class Vehicle {
    protected honk(): void {
        console.log("Beep")
    }
}

// BASIC INHERITANCE
class Car extends Vehicle {
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

const car = new Car()
car.startDrivingProcess()