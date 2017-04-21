const Car = require('./car');

class Toyota extends Car {
    constructor() {
        super()
        this.honk = 'whoop'
        this.modelYear = 2005
    }
}

module.exports = Toyota
