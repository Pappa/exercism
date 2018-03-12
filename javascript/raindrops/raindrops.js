const raindrops = {
    'Pling': 3,
    'Plang': 5,
    'Plong': 7
};

class Raindrops {

    convert(n) {
        const factors = [...Array(n + 1).keys()]
            .filter(x => n % x === 0);

        return Object.entries(raindrops)
            .reduce((acc, [drop, factor]) => {
                return (factors.includes(factor)) ? acc + drop : acc;
            }, '') || n.toString();
    }
}

module.exports = Raindrops;