class Matrix {
    constructor(input) {
        this.rows = input.split('\n')
            .map(row => row.split(' ').map(n => parseInt(n)));

        this.columns = this.rows[0]
            .map((col, index) => this.rows.map(row => row[index]));
    }
}

module.exports = Matrix;