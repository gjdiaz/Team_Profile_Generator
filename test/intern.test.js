const Intern = require('../lib/intern');

describe("Initialization", () => {
    it("should create an object that is going to have the properties name, id, email, and school", () => {
        const obj = new Intern("Mary", 56, "mary@gmail.com", "MIT");
        expect(obj).toEqual({
            name: "Mary",
            id: 56,
            email: "mary@gmail.com",
            school: "MIT"
        })
    })
    describe("getName", () => {
        it("should get the name from intern object", () => {
            const obj = new Intern("Mary", 56, "mary@gmail.com", "MIT");
            const getName = obj.getName("Mary");
            expect(obj.name).toEqual(getName);
        })
    })
    describe("getId", () => {
        it("should get the id from intern object", () => {
            const obj = new Intern("Mary", 56, "mary@gmail.com", "MIT");
            const getId = obj.getId(42);
            expect(getId).toEqual(obj.id);
        })
    })
    describe("getEmail", () => {
        it("should get the email address from intern object", () => {
            const obj = new Intern("Mary", 56, "mary@gmail.com", "MIT");
            const getEmail = obj.getEmail("mary@gmail.com");
            expect(getEmail).toEqual(obj.email);
        })
    });
    describe("getSchool", () => {
        it("should get the school of the intern object", () => {
            const obj = new Intern("MIT");
            const getSchool = obj.getSchool("MIT");
            expect(getSchool).toEqual(obj.school);
        })
    })
});