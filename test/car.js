class Car {
    constructor() {
        this.exists = true
        this.speed = 0
        this.rpm = 1000
        this.color = 'blue'
        this.wheels = 4
        this.honk = "BEEP!"
        this.modelYear = "brand new"
        this.lights = false
        this.signal = false
        this.signalL = "left"
        this.signalR = "right"
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
    makeYear() {
        return this.modelYear
    }
    lightSwitchOn() {
        this.lights = !this.lights
        return this.lights
    }
    lightSwitchOff() {
        this.lights = this.lights
        return this.lights
    }
    checkLights() {
        return this.lights
    }
    turnRight() {
        return this.signalR
    }
    turnLeft() {
        return this.signalL
    }
    startingSpeed() {
        return this.speed
    }
    speedUp(speed) {
        this.speed = this.speed + speed
        return this.speed
    }
    slow(speed) {
        this.speed = this.speed - speed
        return this.speed
    }
    carInfo() {
        var year = ("My model year is" + this.modelYear)
        return year
        // return toyota.toString()
    }
}


module.exports = Car
