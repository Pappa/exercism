const LOW = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
const TENS = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const ORDERS = [
    {
        name: 'billion',
        val: 1000000000
    },
    {
        name: 'million',
        val: 1000000
    },
    {
        name: 'thousand',
        val: 1000
    },
    {
        name: 'hundred',
        val: 100
    }
];

module.exports = {
    inEnglish: (n) => {
        if (n < 0 || n > 999999999999) {
            throw new Error('Number must be between 0 and 999,999,999,999.');
        }
        if (n <= 20) {
            return LOW[n];
        }
        let output = '';
        ORDERS.forEach(o => {
            if (n >= o.val) {
                const remainder = n % o.val;
                const multiplier = (n - remainder) / o.val;
                output += ' ' + LOW[multiplier] + ' ' + o.name;
                n = remainder;
            }
        });

        return output.trim();
    }
};