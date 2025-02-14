function numConditioned(num){
    if(num % 2 === 1){
        const multi = num * 2;
        return multi;
    }
    else{
        const divide = num / 2;
        return divide;
    }
}

const num = numConditioned(8);
console.log(num);
