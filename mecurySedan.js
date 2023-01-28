import "./vehicle";


//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car {
    constructor(make, model, year, color, mileage){
         super(make, model, year, color, mileage);
         this.maxPassengers = 5; 
         this.passenger = 0;
         this.number0fWheels = 4;
         this.maxSpeed = 160;
         this.fuel = 10;
         this.scheduleService = false;
        
    }

    checkService(){
        if(this.mileage > 30000){
            this.scheduleService = true
            return this.scheduleService;
        }
    }

    start(){
        if (this.fuel>0){
            console.log("engine has started.");
        }
    }
}


