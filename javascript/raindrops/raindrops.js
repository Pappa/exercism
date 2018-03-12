const raindrops = {
    'Pling': 3,
    'Plang': 5,
    'Plong': 7
};

class Raindrops {

    convert(n) {
        return Object.entries(raindrops)
            .reduce((acc, [drop, factor]) => {
                return (n % factor === 0) ? acc + drop : acc;
            }, '') || n.toString();
    }
}

module.exports = Raindrops;