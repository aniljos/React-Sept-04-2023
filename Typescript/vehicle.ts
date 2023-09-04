class Vehicle{

    //default access modifier is public
    name: string;
    gears: number;
    speed: number;

    //multiple constructor declaration
    constructor();
    constructor(name: string, gears: number);
    constructor(name: string, gears: number, speed: number);

    //one constructor implementation
    constructor(name?: string, gears?: number, speed?: number){
        this.name = name;
        this.gears = gears;
        this.speed = speed;
    }

    incrementSpeed(value: number): void{
        this.speed+= value;
    }
}

let car: Vehicle = new Vehicle();
car.name = "Audi"; car.gears=6; car.speed = 80;
console.log("car", car);
car.incrementSpeed(20);
console.log("car", car);

var car1 = new Vehicle();
console.log(car1);
car1 = new Vehicle("BMW", 7);
console.log(car1);
car1 = new Vehicle("BMW", 7, 400);
console.log(car1);


