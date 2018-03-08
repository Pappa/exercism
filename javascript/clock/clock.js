class Clock {

    constructor(hour, min = 0) {
        this.hour = time(hour + Math.floor(min / 60), 24);
        this.min = time(min, 60);
    }

    toString() {
        return format(this.hour) + ':' + format(this.min);
    }

    equals(t2) {
        return this.toString() === t2.toString();
    }

    plus(n) {
        return new Clock(this.hour, this.min + n);
    }

    minus(n) {
        return this.plus(-n);
    }
 }

function time(n, limit) {
    return n >= 0 ? n % limit : (limit + n % limit) % limit;
}

function format(t) {
    return ('0' + t).substr(-2);
}

module.exports = {
    at: (hour, min) => new Clock(hour, min)
}