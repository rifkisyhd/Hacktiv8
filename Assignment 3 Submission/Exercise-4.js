/*
Nama : Muhammad Rifki Syahada


*/


function arrSum(array) {
  let maxSekarang = array[0];
  let maxSemua = array[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxSekarang + array[i]) {
      maxSekarang = array[i];
      tempStart = i;
    } else {
      maxSekarang += array[i];
    }

    if (maxSekarang > maxSemua) {
      maxSemua = maxSekarang;
      start = tempStart;
      end = i;
    }
  }

  return [array.slice(start, end + 1), maxSemua];
}

let array = [-2, -3, 4, -1, -2, 1, 5, -3];
let result = arrSum(array);
console.log(result);
