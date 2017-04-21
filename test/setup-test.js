var mocha = require('mocha')
var expect = require('chai').expect

const Car = require('./car');
const Toyota = require('./toyota');
const Tata = require('./tata');
const Tesla = require('./tesla');
const Lexus = require('./lexus');


var newCar
var toyota
var lexus
var tesla
var tata

describe('car tests', function() {
    beforeEach(function() {
        newCar = new Car()
        toyota = new Toyota()
        lexus = new Lexus()
        tesla = new Tesla()
        tata = new Tata()
    })

    describe('exists', function() {
        it('should create new vehicle', function() {
            let result = newCar.doesExist()
            expect(result).to.be.true
        })
    })


    describe('wheel', function() {
        it('should have 4 wheels', function() {
            let result = newCar.numberWheels()
            expect(result).to.equal(4)
        })
    })

    describe('honk', function() {
        it('should sound BEEP-like', function() {
            let result = newCar.honkHorn()
            expect(result).to.equal('BEEP!')
        })
    })

    describe('toyota', function() {
        it('should make a toyota', function() {
            let result = toyota.doesExist()
            expect(result).to.be.true
        })
    })
    describe('toyota beep like sound thats actually whoop', function() {
        it('should make a whoop sound', function() {
            let result = toyota.honkHorn()
            expect(result).to.equal('whoop')
        })
    })
    describe('lexus', function() {
        it('should make a lexus', function() {
            let result = lexus.doesExist()
            expect(result).to.be.true
        })
    })
    describe('lex beep', function() {
        it('should sound BEEPish', function() {
            let result = lexus.honkHorn()
            expect(result).to.equal('beep')
        })
    })
    describe('tesla', function() {
        it('should make a tesla', function() {
            let result = tesla.doesExist()
            expect(result).to.be.true
        })
    })
    describe('tes beep', function() {
        it('should sound BEEPy', function() {
            let result = tesla.honkHorn()
            expect(result).to.equal("Beep-bee-bee-boop-bee-doo-weep")
        })
    })
    describe('model year', function() {
        it('return model year', function() {
            let result = newCar.makeYear()
            expect(result).to.equal("brand new")
        })
    })
    describe('lights may be on', function() {
        it('return true?', function() {
            let result = newCar.lightSwitchOn()
            expect(result).to.be.true
            expect(newCar.lights).to.be.true
        })
    })
    describe('lights are off', function() {
        it('return false', function() {
            let result = newCar.lightSwitchOff()
            expect(result).to.be.false
            expect(newCar.lights).to.be.false
        })
    })
    describe('check the lights bra', function() {
        it('return true or false', function() {
            let result = newCar.checkLights()
            expect(result).to.be.oneOf([true, false])
        })
    })
    describe('your telling ppl you wanna go right', function() {
        it('returning right signal', function() {
            let result = newCar.turnRight()
            expect(result).to.equal("right")
        })
    })
    describe('your abruptly turning left now', function() {
        it('returning left signal', function() {
            let result = newCar.turnLeft()
            expect(result).to.equal("left")
        })
    })
})
describe('all cars are stopped with a speed of 0mph', function() {
    it('return number', function() {
        let result = newCar.startingSpeed()
        expect(result).to.equal(0)
    })
})

describe('tesla speeding up to 10', function() {
    it('return number', function() {
        let result = tesla.speedUp(10)
        expect(result).to.equal(10)
        expect(tesla.speed).to.equal(10)
        console.log(tesla.speed);
    })
})
describe('tesla slow down by 7', function() {
    it('return number', function() {
        let result = tesla.slow(7)
        expect(result).to.equal(3)
        expect(tesla.speed).to.equal(3)
        console.log(tesla.speed);
    })
})
describe('tata speeding up to 2', function() {
    it('return number', function() {
        let result = tata.speedUp(2)
        expect(result).to.equal(2)
        expect(tata.speed).to.equal(2)
        console.log(tata.speed);

    })
})
describe('tata slow down by 1.25', function() {
    it('return number', function() {
        let result = tata.slow(1.25)
        expect(result).to.equal(.75)
        expect(tata.speed).to.equal(.75)
        console.log(tata.speed);

    })
})
describe('toyota speeding up to 7', function() {
    it('return number', function() {
        let result = toyota.speedUp(7)
        expect(result).to.equal(7)
        expect(toyota.speed).to.equal(7)
        console.log(toyota.speed);

    })
})
describe('toyota slow down by 5', function() {
    it('return number', function() {
        let result = toyota.slow(5)
        expect(result).to.equal(2)
        expect(toyota.speed).to.equal(2)
        console.log(toyota.speed);
    })
})
describe('toyota specs', function() {
    it('should return car info: ', function() {
        let result = toyota.carInfo()
        expect(result).to.be.a("string")
        console.log(result);
    })
})









//
