const flatten = (output, item) => {
    if (Array.isArray(item)) {
        return item.reduce(flatten, output);
    }
    if (item !== null) {
        return output.concat([item]);
    }
    return output;
};

class Flattener {

    flatten(input) {
        return input.reduce(flatten, []);
    }

}

module.exports = Flattener;