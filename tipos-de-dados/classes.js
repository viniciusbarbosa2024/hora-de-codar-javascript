class Car {
    constructor(brand,model,year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    acelerar() {
        console.log('Vruuuuum')
    }
}

const car1 = new Car('Toyota','Corola',2012)
const car2 = new Car('Chevrolet','S10',2018)

console.log(car1.brand)
console.log(car2.year)

car1.acelerar()