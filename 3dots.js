// const age = [12,58,32,47];
// const age2 = [42,98,12,57];
// const age3 = [17,53,32,97];
// //const totalAge = age.concat(age2);
// const totalAge = [...age,...age2,5,...age3];
// console.log(totalAge);

// const first = 450;
// const second = 650;
// const third = 999;
const age3 = [17,53,32,97];
// const maximum = Math.max(first, second, third);
const maximum = Math.max(...age3);
console.log(maximum);