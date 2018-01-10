class Triangle {

    constructor(n) {
        this.rows = Array(n)
            .fill([])
            .map((row, index) => {
                return Array(index + 1).fill(1);
            })
            .map((row, index, rows) => {
                if (index === 0) {
                    return row;
                }
                return row.map((n, colIndex, cols) => {
                    let prev = rows[index - 1];
                    if (colIndex === 0) {
                        return prev[colIndex];
                    }
                    if (colIndex === cols.length - 1) {
                        return prev[colIndex - 1];
                    }
                    return prev[colIndex - 1] + prev[colIndex];
                });
            });
        console.log(this.rows);
        this.lastRow = this.rows[this.rows.length - 1];
    }


}

module.exports = Triangle;