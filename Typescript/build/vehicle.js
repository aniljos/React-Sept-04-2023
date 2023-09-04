class Vehicle {
    //one constructor implementation
    constructor(name, gears, speed) {
        this.name = name;
        this.gears = gears;
        this.speed = speed;
    }
    incrementSpeed(value) {
        this.speed += value;
    }
}
let car = new Vehicle();
car.name = "Audi";
car.gears = 6;
car.speed = 80;
console.log("car", car);
car.incrementSpeed(20);
console.log("car", car);
var car1 = new Vehicle();
console.log(car1);
car1 = new Vehicle("BMW", 7);
console.log(car1);
car1 = new Vehicle("BMW", 7, 400);
console.log(car1);
