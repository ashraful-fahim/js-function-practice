// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(array){
    const len = array.length;
    let sum = 0;
    for(num of array){
        sum = sum + num;
    }
    const avg = sum/len;
    return avg;
}

const array_num = [2,3,5,23,55,14];
console.log('The average of the given array is',make_avg(array_num));