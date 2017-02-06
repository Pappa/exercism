function isUpperCase(l) {
    return /[A-Z\xdc\xc4\xdc]/.test(l);
}

function isLetter(l) {
    return /[A-Za-z\xfc\xe4\xdc]/.test(l);
}

function Bob() {
    this.answers = {
        question: 'Sure.',
        yell: 'Whoa, chill out!',
        nada: 'Fine. Be that way!',
        else: 'Whatever.'
    };
};

Bob.prototype.hey = function (input) {
    var inputChars = input.split('');
    var inputLetters = inputChars.filter(isLetter);
    if (inputLetters.length && inputLetters.every(isUpperCase)) {
        return this.answers.yell;
    }
    if (inputChars.slice(-1)[0] === '?') {
        return this.answers.question;
    }
    if (input.trim() === '') {
        return this.answers.nada;
    }
    return this.answers.else;

};

module.exports = Bob;