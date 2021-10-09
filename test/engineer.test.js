const Engineer = require('../lib/engineer');


describe("Initialization", () => {
    it("should create an object that is going to have the properties name, id, email, and github", () => {
        const obj = new Engineer("Alex", 43, "alex@gmail.com", "adev1");
        expect(obj).toEqual({
            name: "Alex",
            id: 43,
            email: "alex@gmail.com",
            github: "adev1"
        })
    })
    describe("getName", () => {
        it("should get the name from engineer object", () => {
            const obj = new Engineer("Alex", 43, "alex@gmail.com", "adev1");
            const getName = obj.getName("Alex");
            expect(getName).toEqual(obj.name);
        })
    })
    describe("getId", () => {
        it("should get the id from engineer object", () => {
            const obj = new Engineer("Alex", 43, "alex@gmail.com", "adev1");
            const getId = obj.getId(43);
            expect(getId).toEqual(obj.id);
        })
    })
    describe("getEmail", () => {
        it("should get the email address from engineer object", () => {
            const obj = new Engineer("Alex", 43, "alex@gmail.com", "adev1");
            const getEmail = obj.getEmail("alex@gmail.com");
            expect(getEmail).toEqual(obj.email);
        })
    })
    describe("getGithub", () => {
        it("should get the github username from engineer object", () => {
            const obj = new Engineer("Alex", 43, "alex@gmail.com", "adev1");
            const getGithub = obj.getGithub("adev1");
            expect(getGithub).toEqual(obj.github);
        })
    })
});