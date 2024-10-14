/*
Nama : Muhammad Rifki Syahada


*/



function DeretArimatika(array) {
    if (array.length < 2) return true; 

    const perbedaan = array[1] - array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] - array[i - 1] !== perbedaan) {
            return false; 
        }
    }
    return true; 
}



console.log(DeretArimatika([1, 2, 3, 4])); // true
console.log(DeretArimatika([2, 4, 6, 8])); // true
console.log(DeretArimatika([2, 4, 6, 9])); // false
console.log(DeretArimatika([1, 4, 5, 7])); // false
