const palindromes = function (sentence) {
    punctuations = [',', '.', '!', '?', ' '];
    const filteredSentence = sentence
        .toLowerCase()
        .split('')
        .filter((character) => !punctuations.includes(character))
        .join('');
    const reversedSentence = filteredSentence.split('').reverse().join('');
    return filteredSentence === reversedSentence;
};

// Do not edit below this line
module.exports = palindromes;
