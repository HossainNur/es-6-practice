// function doubleIt(num){
//     return num * 2
// }

// const doubleIt = function(num){
//     return num * 2;
// // }

// const doubleIt = num => num * 2;
// const double = (x,y) => x * y;
// const double = () => 5;

const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doMath(20,10);
console.log(result);