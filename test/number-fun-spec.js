const { expect } = require('chai');
const  {returnsThree, reciprocal} = require('../problems/number-fun');


describe('returnsThree function', function(){
    it('Should return the number 3', function(){
        expect(returnsThree()).to.equal(3)

    })

})

describe('recriprocal function', function(){
    it('should return the reciprocal of given number', function(){
        const result = 10
        expect(reciprocal(result)).to.equal(1/10)
    })
    // it('input number should be inbetween 1 and 1,000,000', function(){
    //     let num = 0
    //     let num2 = 1000001
    //     expect(reciprocal(num)).to.throw(RangeError);
    //     expect(reciprocal(num2)).to.throw(RangeError);
    // })


    context('valid arguments', function(){
        it('should return the reciprocal of given number', function(){
            const result = 10
        expect(reciprocal(result)).to.equal(1/10)
    })
    })

    context('invalid arguments', function(){
        it('Should throw a RangeError if argument is less than 1', function(){
            const num = 0
            // const num2 = -5
        expect(() => reciprocal(num)).to.throw(RangeError);
        // expect(() => reciprocal(num2)).to.throw(RangeError);
        })

        it('Should throw a RangeError if argument is greater than 1,000,000', function(){
            const num = 1000001
            // const num2 = 2000000
        expect(() => reciprocal(num)).to.throw(RangeError);
        // expect(() => reciprocal(num2)).to.throw(RangeError);
    })

    })

})
