class Intern{
    constructor(name, id, title, school) {
        this.name = name,
            this.id = id,
            this.title = title,
        this.school = school
    }
    getRole() {
        return "Intern";
    }
    
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;