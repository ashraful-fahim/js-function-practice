// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(num){
    if(num % 2 === 0){
        return console.log('Even');
    }
    else{
        return console.log('Odd');
    }
}

odd_even(46);