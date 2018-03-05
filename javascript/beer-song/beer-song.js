let verse = 'OOO bottleXXX of beer on the wall, OOO bottleXXX of beer.\nTake ZZZ down and pass it around, PPP bottleYYY of beer on the wall.\n';
let reallyWrong = 'no more bottles of beer on the wall, 0 bottle of beer.\nTake one down and pass it around, -1 bottle of beer on the wall.';
let last = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';

class BeerSong {

    verse(n) {
        let n2 = n - 1;
        return verse
            .replace(/OOO/g, n)
            .replace(/PPP/, n2)
            .replace(/XXX/g, (n > 1) ? 's' : '')
            .replace(/YYY/g, (n2 > 1) ? 's' : '')
            .replace(/ZZZ/g, (n === 1) ? 'it' : 'one')
            .replace(/0 bottle/, 'no more bottles')
            .replace(reallyWrong, last);
    }

    sing(v1, v2 = 0) {
        let output = '';
        for (let i = v1; i >= v2; i--) {
            output += this.verse(i);
            if (i > v2) {
                output += '\n';
            }
        }
        return output;
    }
}

module.exports = BeerSong;