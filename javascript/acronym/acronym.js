const regex = /\W*(\w)([A-Z]+|[a-z]+)\W*/g;

module.exports = {
    parse: str => {
        return str.replace(regex, '$1').toUpperCase();
    }
}