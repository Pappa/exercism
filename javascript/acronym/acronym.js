const regex = /\b([A-Za-z])|[a-z]([A-Z])/g

module.exports = {
    parse: str => {
        let found = '', match;
        while ((match = regex.exec(str)) !== null) {
            found += match[1] || match[2];
        }
        return found.toUpperCase();
    }
}