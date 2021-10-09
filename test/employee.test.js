const Employee = require('../lib/employee');

describe("Initialization", () => {
    it("should create an object that is going to have the properties name, id, and email", () => {
        const obj = new Employee("Ann", 42, "ann.smith@gmail.com");
        expect(obj).toEqual({
            name: "Ann",
            id: 42,
            email: "ann.smith@gmail.com"
        })
    })
    describe("getName", () => {
        it("should get the name from employee object", () => {
            const obj = new Employee("Ann", 42, "ann.smith@gmail.com");
            const getName = obj.getName("Ann");
            expect(getName).toEqual(obj.name);
        })
    })
    describe("getId", () => {
        it("should get the id from the employee object", () => {
            const obj = new Employee("Ann", 42, "ann.smith@gmail.com");
            const getId = obj.getId(42);
            expect(getId).toEqual(obj.id);
        })
    })
    describe("getEmail", () => {
        it("should get the email address from employee object", () => {
            const obj = new Employee("Ann", 42, "ann.smith@gmail.com");
            const getEmail = obj.getEmail("ann.smith@gmail.com");
            expect(getEmail).toEqual(obj.email);
        })
    })
});