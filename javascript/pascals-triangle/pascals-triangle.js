class Triangle {

    constructor(n) {
        this.rows = this.generateTriangle(n);
        this.lastRow = this.rows[this.rows.length - 1];
    }

    generateTriangle(n) {
        let triangle = [[1]];
        while (triangle.length < n) {
            triangle.push(this.generateRow((triangle)));
        }
        return triangle;

    }

    generateRow(triangle) {
        let newRowIdx = triangle.length;
        let lastRowIdx = newRowIdx - 1;
        let lastRow = triangle[lastRowIdx];
        return Array(lastRow.length + 1)
            .fill(1)
            .map((num, idx) => {
                if (idx === 0) {
                    return lastRow[idx];
                }
                if (!lastRow[idx]) {
                    return lastRow[idx - 1];
                }
                return lastRow[idx - 1] + lastRow[idx];
            });
    }

}

module.exports = Triangle;