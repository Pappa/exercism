class Proverb {

    constructor(...words) {
        const last = words[words.length - 1];
        let qualifier = '';
        
        if (last.qualifier) {
            qualifier = last.qualifier + ' ';
            words = words.slice(0, words.length - 1);
        }

        this.proverb = words.map((word, idx) => {
            const next = words[idx + 1];
            if (!next) {
                return `And all for the want of a ${qualifier}${words[0]}.`;
            }
            return `For want of a ${word} the ${next} was lost.`;
        })
        .join('\n');
    }

    toString() {
        return this.proverb;
    }

}

module.exports = Proverb;