const Manager = require('../lib/manager');

describe("Initialization", () => {
    it("should create an object that is going to have the properties name, id, email, and office number", () => {
        const obj = new Manager("Jenny", 13, "jenny@gmail.com", "867-5309");
        expect(obj).toEqual({
            name: "Jenny",
            id: 13,
            email: "jenny@gmail.com",
            officenum: "867-5309"
        })
    })
    describe("getName", () => {
        it("should get the name from manager object", () => {
            const obj = new Manager("Jenny", 13, "jenny@gmail.com", "867-5309");
            const getName = obj.getName("Jenny");
            expect(obj.name).toEqual(getName);
        })
    })
    describe("getId", () => {
        it("should get the id from the manager object", () => {
            const obj = new Manager("Jenny", 13, "jenny@gmail.com", "867-5309");
            const getId = obj.getId(13);
            expect(getId).toEqual(obj.id);
        })
    })
    describe("getEmail", () => {
        it("should get the email address from manager object", () => {
            const obj = new Manager("Jenny", 13, "jenny@gmail.com", "867-5309");
            const getEmail = obj.getEmail("jenny@gmail.com");
            expect(getEmail).toEqual(obj.email);
        })
    })
    describe("getOfficeNum", () => {
        it("should get the office number of the manager object", () => {
            const obj = new Manager("Jenny", 13, "jenny@gmail.com", "867-5309");
            const getOfficeNum = obj.getOfficeNum("867-5309");
            expect(getOfficeNum).toEqual(obj.officeNum);
        })
    })
});