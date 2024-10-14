/*
Nama : Muhammad Rifki Syahada


*/

function AB(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      for (let j = i + 4; j < str.length; j++) {
        if (str[j] === "b") {
          return true;
        }
      }
    } else if (str[i] === "b") {
      for (let j = i + 4; j < str.length; j++) {
        if (str[j] === "a") {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(AB("Muhammad Rifki")); //false
console.log(AB("Rifki Syahada")); //false
console.log(AB("air biru")); //true
console.log(AB("i am sick")); //false
console.log(AB("aki basah")); //true
console.log(AB("ayah bunda")); //true
console.log(AB("ayang baru")); //true
