const periods = {
    'Mercury': 0.2408467,
    'Venus': 0.61519726,
    'Earth': 1.0,
    'Venus': 0.61519726,
    'Earth': 1.0,
    'Mars': 1.8808158,
    'Jupiter': 11.862615,
    'Saturn': 29.447498,
    'Uranus': 84.016846,
    'Neptune': 164.79132
};

class SpaceAge {
    constructor(seconds) {
        this.seconds = seconds;
    }
}

Object.keys(periods)
    .forEach(key => {
        SpaceAge.prototype['on' + key] = function() {
            let years = this.seconds * periods[key] / 31557600;
            return Math.round(years * 100) / 100;
        };
});

module.exports = SpaceAge;
