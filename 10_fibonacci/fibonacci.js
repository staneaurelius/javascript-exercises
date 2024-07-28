const fibonacci = function(index) {
    let fibonacciArray = [0, 1];

    if (index > 1) {
        for (let i = 1; i < index; i++) {
            nextSequence = fibonacciArray.slice(-2).reduce((total, number) => total + number);
            fibonacciArray.push(nextSequence);
        }
    } else if (index < 0) {
        return 'OOPS'
    };

    return fibonacciArray[index];
};

// Do not edit below this line
module.exports = fibonacci;
