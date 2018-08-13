const validate = (n) => {
    const digits = [...'' + n];
    const pow = digits.length;

    return n === digits
        .map(d => Math.pow(d, pow))
        .reduce((acc, d) => acc + d, 0);
}

module.exports = { validate };