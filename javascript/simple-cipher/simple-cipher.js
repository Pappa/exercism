const alphabet = 'abcdefghijklmnopqrstuvwxyz';

class Cipher {


    constructor(key) {
        if (key === '') {
            throw new Error('Bad key');
        }
        if (key && !this.isLowerCase(key)) {
            throw new Error('Bad key');
        }
        if (key) {
            this.key = key;
            return;
        }
        this.generateKey();
    }

    encode(str) {
        this.expandKey(str);
        return str.split('')
            .map((char, index) => {
                let newIndex = alphabet.indexOf(char) + alphabet.indexOf(this.key[index]);
                if (newIndex >= alphabet.length) {
                    newIndex -= alphabet.length;
                }
                return alphabet[newIndex];
            })
            .join('');
    }

    decode(str) {
        this.expandKey(str);
        return str.split('')
            .map((char, index) => {
                let newIndex = alphabet.indexOf(char) - alphabet.indexOf(this.key[index]);
                if (newIndex < 0) {
                    newIndex += alphabet.length;
                }
                return alphabet[newIndex];
            })
            .join('');
    }

    expandKey(str) {
        while (this.key.length < str.length) {
            this.key += this.key;
        }
    }

    generateKey() {
        this.key = this.key || alphabet;
        this.key = this.key
            .split('')
            .map(a => [Math.random(),a])
            .sort((a, b) => a[0]-b[0])
            .map(a => a[1])
            .join('');
    }

    isLowerCase(key) {
        return key.split('').every(l => alphabet.includes(l));
    }
}

module.exports = Cipher;