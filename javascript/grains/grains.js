bigInt = require('./big-integer');

class Grains {

    square(n) {
        return bigInt(2).pow(n - 1).toString();
    }

    total() {
        return bigInt(2).pow(64).prev().toString();
    }
}

module.exports = Grains;