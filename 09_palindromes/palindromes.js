const palindromes = function (paliCheck) {
    let checker = "";
    let invertedChecker;

    for (const letter of paliCheck) {
        if (isLetter(letter)) {
            checker += letter
            // we have a string with only letters
        }
    }

    invertedChecker = checker.reverse()

};

const isLetter = function (letter) {
    let letterChecker = /^[a-zA-Z]+$/;
    return letterChecker.test(letter)
};

// Do not edit below this line
module.exports = palindromes;
