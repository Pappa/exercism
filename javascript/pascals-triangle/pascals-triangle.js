class Triangle {

    constructor(n) {
        this.fillRows(n);
        this.rows = this.calculateRows(2);
        this.lastRow = this.rows[this.rows.length - 1];
    }

    fillRows(n) {
        this.rows = Array(n)
            .fill([])
            .map((row, index) => {
                return Array(index + 1).fill(1);
            });
    }

    calculateRows(row) {
        if (!this.rows[row]) {
            return this.rows;
        }

        this.rows[row] = this.rows[row]
            .map((num, idx) => {
                let prev = this.rows[row - 1];
                if (idx === 0) {
                    return prev[idx];
                }
                if (!prev[idx]) {
                    return prev[idx - 1];
                }
                return prev[idx - 1] + prev[idx];
            });

        return this.calculateRows(row + 1);

    }

}

module.exports = Triangle;