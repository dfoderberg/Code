/**
 * Create your own class to use as a template and create five objects from the 
 * class. For example, if using the Books example from 3.8 create five books.
 * Place the objects into an array called 'all_objects'. 
 */

class Car {
    constructor(color, make){
        this.color = color;
        this.make = make;
    };
}

all_objects = [];

bigTruck = new Car("red", "ford");
littleTruck = new Car('pink', 'honda');
sportCar = new Car('red', 'lotus');
littleCar = new Car('grey', 'toyota');
suv = new Car('white', 'GMC');

all_objects.push(bigTruck);
all_objects.push(littleCar);
all_objects.push(littleTruck);
all_objects.push(sportCar);
all_objects.push(suv);

console.log(all_objects.length);



