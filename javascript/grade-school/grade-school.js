class School {

    constructor() {
        this.grades = {};
    }

    roster() {
        return this.grades;
    }

    add(name, grade) {
        if (!this.grades[grade]) {
            this.grades[grade] = [];
        }
        this.grades[grade].push(name);
        this.grades[grade].sort();
    }

    grade(n) {
        return this.grades[n] || [];
    }

}

module.exports = School;