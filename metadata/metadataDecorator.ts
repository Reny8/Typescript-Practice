import "reflect-metadata";

@printMetadata
class Plane {
  color: string = "red";
  @markFunction("Hi There")
  fly(): void {
    console.log("vrrrrr");
  }
}

// FACTOR DECORATOR EXAMPLE USING METADATA
function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}
// CLASS DECORATOR
function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}
// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// console.log(secret);
