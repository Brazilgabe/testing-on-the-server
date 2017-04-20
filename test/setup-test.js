var mocha = require('mocha')
var expect = require('chai').expect
const Car = require('./car');
var newCar = new Car()
var toyota = new Car()
var lexus = new Car()
var tesla = new Car()


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
        let result = toyota.createToyota()
        expect(result).to.be.true
    })
})
describe('toyota beep like sound thats actually whoop', function() {
    it('should make a whoop sound', function() {
        let result = toyota.toyotaHorn()
        expect(result).to.equal('whoop')
    })
})
describe('lexus', function() {
    it('should make a lexus', function() {
        let result = lexus.createLexus()
        expect(result).to.be.true
    })
})
describe('lex beep', function() {
    it('should sound BEEPish', function() {
        let result = lexus.lexusHonk()
        expect(result).to.equal('beep')
    })
})
describe('tesla', function() {
    it('should make a tesla', function() {
        let result = tesla.createTesla()
        expect(result).to.be.true
    })
})
describe('tes beep', function() {
    it('should sound BEEPy', function() {
        let result = tesla.teslaHonk()
        expect(result).to.equal("Beep-bee-bee-boop-bee-doo-weep")
    })
})
describe('model year', function() {
    it('return model year', function() {
        let result = newCar.makeYear()
        expect(result).to.equal("brand new")
    })
})
describe('light switching', function() {
    it('should tell you if the lights are on', function() {
        let result = newCar.changeLightsOn()
        expect(result).to.equal("the lights are on")
    })
})
describe('light switching', function() {
    it('should tell you if the lights are off', function() {
        let result = newCar.changeLightsOff()
        expect(result).to.equal("the lights are off")
    })
})



// console.log(newCar)
// describe('Sample Application', function() {
//     it('should run tests', function() {
//         expect(true).to.be.true
//     })
// })
