
class Car {

    constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
      this._speed = speed;
      this._price = price;
      this._maxSpeed = maxSpeed;
      this._isOn = isOn;
      this._distance = distance;
    }
    
    static getSpecs = function(car){
     console.log(`maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`);
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    turnOn = function() {
    this._isOn = true;
    }

    turnOff = function() {
    this._isOn = false;
    this._speed = 0;
    }

  accelerate = function(value) {
    if (value <= this._maxSpeed){
    }
    return this._speed = value;
  }

  decelerate = function(value) {
    if (value > 0) {
      this._speed -= value;
    }
    return this._speed;
  }

    drive = function(hours) {
      if (this._isOn){
        this._distance += hours * this._speed;
      }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price); 