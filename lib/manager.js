const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officenum) {
        super(name, id, email);
        this.officenum = officenum
    };
    getOfficeNum() {
        if(officenum === this.officenum) {
            return this.officenum;
        }
    };
    getRole() {

    };

}

module.exports = Manager;