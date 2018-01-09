module.exports = {
    for: n => {
        let divisor = 2;
        let factors = [];
        while (n > 1) {
            if (n % divisor === 0) {
                n /= divisor;
                factors.push(divisor);
            } else {
                divisor++;
            }
        }
        return factors;

    }
};