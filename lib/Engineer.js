class Engineer{
    constructor(name, id, title, github) {
        this.name = name,
            this.id = id,
            this.title = title,
        this.github = github
    }

    getRole() {
       return "Engineer";
    }

    getGithub() {
        return this.github
    }
}

module.exports = Engineer;