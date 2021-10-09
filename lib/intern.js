const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
    };
    getSchool() {
        if(school === this.school) {
            return this.school;
        }
    };
    getRole() {

    };

}

module.exports = Intern;