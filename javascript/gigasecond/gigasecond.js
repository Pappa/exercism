function Gigasecond(date) {
    this.d = date;
    this.gigasecond = 1000000000000;
}

Gigasecond.prototype.date = function() {
    return new Date(this.d.getTime() + this.gigasecond);
}

module.exports = Gigasecond;