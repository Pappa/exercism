const alphabet = 'abcdefghijklmnopqrstuvwxyz';

class Cipher {


    constructor() {
        this.generateKey();
    }

    encode(str) {

    }

    decode(str) {

    }

    generateKey() {
        this.key = this.key || alphabet;
        this.key = this.key.split('').sort(() => Math.random() - 0.5).join('');
    }
}

module.exports = Cipher;