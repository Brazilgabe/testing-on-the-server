const Car = require('./car');

class Tesla extends Car {
    constructor() {
        super()
        this.honk = "Beep-bee-bee-boop-bee-doo-weep"

    }
}

module.exports = Tesla
