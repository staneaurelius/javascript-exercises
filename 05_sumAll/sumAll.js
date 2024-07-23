const sumAll = function(numberOne, numberTwo) {
    let total = 0;
    let smallNumber,
        bigNumber;

    // Condition to exclusively use positive integer
    const conditionArray = [
        numberOne >= 0 && numberTwo >= 0,
        Number.isInteger(numberOne) && Number.isInteger(numberTwo)
    ];

    if (conditionArray.includes(false)) {
        return 'ERROR';
    } else {
        // Condition to determine which number is the bigger one
        if (numberOne > numberTwo) {
            const temp = numberOne;
            numberOne = numberTwo
            numberTwo = temp;
        };

        // Iteration
        for (let i = numberOne; i < numberTwo + 1; i++) {
            total += i;
        };
        return total;
    };
};

// Do not edit below this line
module.exports = sumAll;
