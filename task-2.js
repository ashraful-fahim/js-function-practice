// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function numConditioned(num) {
    if (num % 2 === 1) {
        const multi = num * 2;
        return multi;
    }
    else {
        const divide = num / 2;
        return divide;
    }
}

const num = numConditioned(8);
console.log(num);
