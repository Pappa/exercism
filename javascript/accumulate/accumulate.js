module.exports = (list, f) => {
    return list.reduce((acc, x) => {
        acc.push(f(x));
        return acc;
    }, []);
};