// let movies = ['Doraemon','Conan','Dragonball Super','Iron man','Bat Man'];
// let movieTitle = prompt('Movie Title: ');
// movies.push(phimMoi);
// let i = prompt('Nhap i: ');
// console.log(movies[i]);
// let movieTitle = prompt('Cap nhat movieTitle cua ban: ');
// movies.unshift(movieTitle);
// let movieTitle = prompt('Cap nhat movieTitle cua ban: ');
// let i = prompt('Nhap i: ');
// movies[i] = movieTitle;
// let i = prompt('Nhap i: ');
// let xoaPhim = movies.splice(i--,i);
// let n = prompt('Nhap n: ');
// let i = prompt('Nhap i: ');
// let xoaPhim = movies.splice(i--,n);
// for(let i = 0;i<movies.length;i++){
//     console.log(i+'. '+movies[i]); 
// }
// for(let i = 0;i<movies.length;i++){
//     console.log(movies[i].toLowerCase()); 
// }
// after 14
// while (true) {
//     var username = prompt('Register an Username');
//     if (username.length<=15) {
//         alert('Your username is valid');
//         break;
//     } else {
//         alert('Your username is too long');
//     }
//     }
//     while (true) {
//         let answer = Number(prompt(`I have a quiz for you, ${username}!\n
//         What's the square root of onions?\n
//         1. Tears\n
//         2. Shallots\n
//         3. 28\n
//         4. Carrot`));
//         if (answer==1||answer==2||answer==3||answer==4) {
//             if (answer == 2) {
//                 alert('Congrats! You are correct');
//             } else {
//                 alert('Better luck next time');
//             }
//             break;
//         } else {
//             alert('Invalid answer, please input 1, 2, 3 or 4');
//         }
//     }
// Bai tap them // tham khao Nhat Minh 
// let n = Number(prompt('How many numbers would you like to input?'));
// let arrayOfNumbers = [];
// for (i = 0; i < n; i++) {
//     let x = Number(prompt(`Input No.${i + 1}`));
//     arrayOfNumbers.push(x);
// }
// console.log(arrayOfNumbers);
// console.log(' ');
// console.log('a)');
// {
//     let i = 0;
//     while (i < n) {
//         if (arrayOfNumbers[i] > arrayOfNumbers[i + 1]) {
//             let t = arrayOfNumbers[i];
//             arrayOfNumbers.splice(i, 1);
//             arrayOfNumbers.push(t);
//             i = 0;
//         } else {
//             i++;
//         }
//     }
// }
// console.log(arrayOfNumbers);
// console.log(' ');
// console.log('b)');
// let evenArray = [];
// let oddArray = [];
// {
//     for (i = 0; i < n; i++) {
//         if (arrayOfNumbers[i] % 2 == 0) {
//             evenArray.push(arrayOfNumbers[i]);
//         } else {
//             oddArray.push(arrayOfNumbers[i]);
//         }
//     }
// }
// console.log(evenArray);
// console.log(oddArray);
// console.log(' ');
// console.log('c)');
// {
//     for(i=0;i<n;i++) {
//         if (oddArray[i]==oddArray[i+1]) {
//             oddArray.splice(i, 1);
//         }
//         if (evenArray[i]==evenArray[i+1]) {
//             evenArray.splice(i, 1);
//         }
//     }
// }
// console.log(evenArray);
// console.log(oddArray);
