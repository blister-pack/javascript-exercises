const palindromes = function (paliCheck) {
    let checker = "";
    let invertedChecker;
    paliCheck = paliCheck.toLowerCase();

    for (const letter of paliCheck) {
        if (isLetter(letter)) {
            checker += letter;
            // we have a string with only letters
        }
    }

    invertedChecker = checker;
    invertedChecker = invertedChecker.split("").reverse().join("");
    console.log(invertedChecker);


    if (invertedChecker === checker) {
        return true;
    } else {
        return false;
    }

};

const isLetter = function (letter) {
    let letterChecker = /^[a-zA-Z0-9]+$/;
    return letterChecker.test(letter);
};

// console.log(palindromes("abba"));
// palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
