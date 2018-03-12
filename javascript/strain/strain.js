const append = (list, item) => list.concat(Array.isArray(item) ? [item] : item);

const keep = (list, predicate) => {
    return list.reduce((acc, item) => predicate(item) ? append(acc, item) : acc, []);
};

const discard = (list, predicate) => keep(list, item => !predicate(item));

module.exports = {
    keep: keep,
    discard: discard
};