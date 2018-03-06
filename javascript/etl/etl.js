class ETL {
    transform(old) {
        let output = {};
        Object.entries(old).forEach(entry => {
            entry[1].forEach(c => {
                output[c.toLowerCase()] = parseInt(entry[0], 10);
            });
        });
        return output;
    }
}

module.exports = ETL;