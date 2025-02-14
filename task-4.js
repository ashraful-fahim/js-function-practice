// Write a function called count_zero() which will take a binary string (Binary string is a string which consists of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str){
    sum = 0;
    for(num of str){
        if(num === '0'){
            sum++;
        }
    }
    return sum;
}

const bnr_str = '101010010101000000111101010';
console.log(count_zero(bnr_str));