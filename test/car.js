class Car {
    constructor() {
        this.exists = true
        this.speed = true
        this.rpm = 1000
        this.color = 'blue'
        this.wheels = 4
        this.honk = "BEEP!"
        this.modelYear = "brand new"
        this.on = "the lights are on"
        this.off = "the lights are off"
    }

    doesExist() {
        return this.exists
    }

    numberWheels() {
        return this.wheels
    }

    honkHorn() {
        return this.honk
    }
    createToyota() {
        return this.exists
    }
    toyotaHorn() {
        let toyBeep = this.honk
        toyBeep = 'whoop'
        return toyBeep
    }
    createLexus() {
        return this.exists
    }
    lexusHonk() {
        let lexBeep = this.honk
        lexBeep = 'beep'
        return lexBeep
    }
    createTesla() {
        return this.exists
    }
    teslaHonk() {
        let tesBeep = this.honk
        tesBeep = "Beep-bee-bee-boop-bee-doo-weep"
        return tesBeep
    }
    makeYear() {
        return this.modelYear
    }
    changeLightsOn() {
        return this.on
    }
    changeLightsOff() {
        return this.off
    }
    checkIfLightOn() {
        changeLightsOn()
        if (this.on) {
            return true
        }
    }
}


module.exports = Car
