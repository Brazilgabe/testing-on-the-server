const Car = require('./car');

class Lexus extends Car {
    constructor() {
        super()
        this.honk = 'beep'

    }
}

module.exports = Lexus
