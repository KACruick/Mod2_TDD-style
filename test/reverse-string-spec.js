const { expect } = require('chai');
const reverseString = require('../problems/reverse-string.js')

describe ("reverse string function", function (){
    it('Should reverse the string fun', function (){
        const input = "fun";
        expect(reverseString(input)).to.equal("nuf")
    })
    // it('Should be a string', function() {
    //     const input = 123;
    //     expect(reverseString(input)).throws(TypeError)
    // })
})
describe("reverse a string", function (){
    it('Should be a string', function() {
        const input = 123;
        expect(reverseString(input)).to.throw(TypeError)
        // expect.throws(reverseString(input), TypeError)
        // expect(() => x.y.z).to.throw(ReferenceError);
        //try and catch??
    })
})
