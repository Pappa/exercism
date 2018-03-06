class ETL {
    transform(old) {
        return Object.entries(old)
            .reduce(reducer, {});
    }
}

const reducer = (output, [n, chars]) => {
    chars.forEach(c => {
        output[c.toLowerCase()] = parseInt(n, 10);
    });
    return output;
}

module.exports = ETL;