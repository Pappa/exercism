class Clock {

    constructor(hour, min = 0) {
        this.time = (hour * 60) + min;
        this.hour = Math.floor(this.time / 12);
        this.min = this.time % 60;
    }

    toString() {
        return format(this.hour) + ':' + format(this.min);
    }

    equals(t2) {
        return this.time === t2.time;
    }
 }

function format(t) {
    return ('0' + t).substr(-2);
}

module.exports = {
    at: (hour, min) => new Clock(hour, min)
}