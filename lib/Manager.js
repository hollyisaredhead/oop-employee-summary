class Manager{
    constructor(name, id, title, officeNumber) {
        this.name = name,
            this.id = id,
            this.title = title,
        this.officeNumber = officeNumber
    }
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    
}

module.exports = Manager;