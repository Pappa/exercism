const segments = (str, cols) => {
    return [...Array(cols).keys()]
        .map(col => {
            let start = col * cols;
            let end = Math.min(str.length, start + cols);
            return str.slice(start, end);
        })
        .filter(row => !!row);
};

const cipher = (segments) => {
    return segments
        .reduce((acc, segment) => {
            [...segment].forEach((c, idx) => {
                acc[idx] = acc[idx] || '';
                acc[idx] += c;
            });
            return acc;
        }, [])
        .join('');
};

class Crypto {

    constructor(input) {
        this.normalised = input.toLowerCase().replace(/\W/g, '');
        this.cols = Math.ceil(Math.sqrt(this.normalised.length));
        this.segments = segments(this.normalised, this.cols);
        this.cipher = cipher(this.segments);
    }

    normalizePlaintext() {
        return this.normalised;
    }

    size() {
        return this.cols;
    }

    plaintextSegments() {
        return this.segments;
    }

    ciphertext() {
        return this.cipher;
    }
}

module.exports = Crypto;