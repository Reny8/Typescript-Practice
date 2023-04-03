@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }
  pilot(@parameterDecorator speed: string): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
  }
}
function parameterDecorator(target: Boat, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: Boat, key: string) {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}

function classDecorator(constructor: Function) {
  console.log(constructor);
}
new Boat();
