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
        this.key = this.key.split('').map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]).join('');
    }
}

module.exports = Cipher;