/*
Nama : Muhammad Rifki Syahada


*/


function sumArray(array, target) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                result.push([array[i], array[j]]);
            }
        }
    }
    return result;
}

console.log(sumArray([2, 1, 4, 3], 5));
console.log(sumArray([1, 8, 10, 3], 11));