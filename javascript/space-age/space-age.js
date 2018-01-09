const EARTH_YEAR_IN_SEC = 31557600;

const periods = {
    'Mercury': EARTH_YEAR_IN_SEC * 0.2408467,
    'Venus': EARTH_YEAR_IN_SEC * 0.61519726,
    'Earth': EARTH_YEAR_IN_SEC * 1.0,
    'Venus': EARTH_YEAR_IN_SEC * 0.61519726,
    'Earth': EARTH_YEAR_IN_SEC * 1.0,
    'Mars': EARTH_YEAR_IN_SEC * 1.8808158,
    'Jupiter': EARTH_YEAR_IN_SEC * 11.862615,
    'Saturn': EARTH_YEAR_IN_SEC * 29.447498,
    'Uranus': EARTH_YEAR_IN_SEC * 84.016846,
    'Neptune': EARTH_YEAR_IN_SEC * 164.79132
};

class SpaceAge {
    constructor(seconds) {
        this.seconds = seconds;
    }
}

Object.keys(periods)
    .forEach(key => {
        SpaceAge.prototype['on' + key] = function() {
            let years = this.seconds / periods[key];
            return Number.parseFloat(years.toFixed(2));
        };
});

module.exports = SpaceAge;
