// cau 1
// function bai1() {
//     let size = Number(prompt("Enter n: "));
//     if ((size <= 4) || (size >= 20) || (size % 2 != 0)) {
//         size = Number(prompt("Your number is not confirmed, Try again "));
//     } else {
//         let num = Number(prompt("Enter your input number: "));
//         let arrNum = [];
//         for (let i = 0; i < size; i++) {
//             arrNum.push(i);
//         }
//         document.getElementById("arrNum").innerHTML = arrNum;
//         document.getElementById("result1").innerHTML = findOppositeNumber(size, num);
//     }
// }

// function findOppositeNumber(n, inputNumber) {
//     if (inputNumber < n / 2) {
//         return n / 2 + inputNumber;
//     } else {
//         return inputNumber - n / 2;
//     }

// }
// cau 2

// function merge2String(a, b) {
//     let res = "";
//     for (let i = 0; i < Math.min(a.length, b.length); i++) {
//         res += a[i];
//         res += b[i];
//     }
//     if (a.length < b.length)
//         for (let i = a.length; i < b.length; i++) res += b[i];
//     if (a.length > b.length)
//         for (let i = b.length(); i < a.length(); i++) res += a[i];
//     return res;
// }

// function bai2() {
//     let str1 = String(prompt("Enter your 1st String: "));
//     let str2 = String(prompt("Enter your 2nd String: "));
//     let arr1 = str1.split('');
//     let arr2 = str2.split('');
//     document.getElementById("result2").innerHTML = merge2String(arr1, arr2);
// }