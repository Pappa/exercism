module.exports = (list, f) => {
    return list.reduce((acc, x) => acc.concat([f(x)]), []);
};