const { expect } = require('chai')
const Person = require("../problems/person")

describe("Person class", function(){
    describe ("constructor", function() {
        it("should set name and age properties on the instance", function() {
            const person = new Person("Kendra", 29)
            expect(person.name).to.equal("Kendra")
            expect(person.age).to.equal(29)
        })
    })
    describe("instance methods", function() {
        it("should return a string of Person instance's name and greeting message", function(){
            const person = new Person("Kendra", 29)
            expect(person.sayHello()).to.equal("Hello, my name is Kendra")
        })
        it("should return a string stating that this instance visited the passed-in person instance", function() {
            const person1 = new Person("Davidson", 26)
            const person2 = new Person("Jaime", 29)
            expect(person1.visit(person2)).to.equal("Davidson visited Jaime")
        })
        it("should invoke the visit function of the parameter, passing in the current instance as the argument", function () {
            const person1 = new Person("Davidson", 26)
            const person2 = new Person("Jaime", 29)
            expect(person1.switchVisit(person2)).to.equal("Jaime visited Davidson")
        })
        describe("update(obj) instance method", function(){
            context("is an invalid object", function(){
                it("should throw a TypeError if incoming argument is not an object", function(){
                    const person = new Person("Kendra", 29)
                    expect(() => person.update("invalid")).to.throw(TypeError)
                })
            })
            context("is an object", function(){
                it("should update the instance properties to match the passed in values", function(){
                    const person = new Person("Kendra", 29)
                    person.update({name: "Sarah", age: 30})
                    expect(person).to.equal({name: "Sarah", age: 30})
                })
            })
        })
    })
    //it("should return a string ")
})