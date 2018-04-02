const defaultStudents = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];
const plants = ['Grass', 'Clover', 'Radishes', 'Violets'].reduce((acc, p) => {
    acc[p[0]] = p.toLowerCase();
    return acc;
}, {});

class Garden {

    constructor(garden, students = defaultStudents) {
        let rows = garden
            .split('\n')
            .map((row) => {
                return [...row].map(c => plants[c]);
            });
        students.sort();
        
        rows[0]
            .reduce((acc, p, idx) => {
                let additions = [rows[0][idx], rows[0][idx + 1], rows[1][idx], rows[1][idx + 1]];
                if (idx % 2 === 0) {
                    acc.push(additions);
                }
                return acc;
            }, [])
            .forEach((section, idx) => {
                this[students[idx].toLowerCase()] = section;
            });
    }

}

module.exports = Garden;