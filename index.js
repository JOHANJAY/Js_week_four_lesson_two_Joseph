class Car {
    constructor(numSeats, numHeadLamps, fuelTankMaxLitre, numExhaustPipe, convertible, numOfDoors, numOfEnginePlug = 4) {
        this.numSeats = numSeats
        this.numHeadLamps = numHeadLamps
        this.fuelTankMaxLitre = fuelTankMaxLitre
        this.numExhaustPipe = numExhaustPipe
        this.convertible = convertible
        this.numOfDoors = numOfDoors
        this.numOfEnginePlug = numOfEnginePlug
    }
}

const corrola = new Car(4, 2, "40ltr", 1, false, 4,);
const g_wagon = new Car(4, 8, "60ltr", 4, false, 4, 12);
const camero = new Car(2, 4, "50ltr", 2, true, 2, 6);
const gmc = new Car(4, 6, "70ltr", 4, false, 4, 8);

