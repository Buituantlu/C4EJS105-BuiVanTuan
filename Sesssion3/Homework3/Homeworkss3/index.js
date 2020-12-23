// let a = 5;
// let b = 6;
// [a,b] = [b,a];
// console.log(a,b);
// const a = 'Hello beauty there';
// const s = a.split(" ");
// console.log(s);
// const a = [4, 5, 7, -8];
// console.log(...a);
// Cau 4 
// let inStock = ['Jeans', 'Shirts', 'Shoes'];
// let stockDisplay = 'The current items are:\n'
// while (true) {
//     let comm = prompt('You have accessed the store\'s admin panel, please input your desired command (C, R, U, D, Esc):');
//     if (comm == 'r') {
//         for (i = 0; i < inStock.length; i++) {
//             stockDisplay = stockDisplay + `${i + 1}. ${inStock[i]}\n`;
//         }
//         alert(stockDisplay);
//         stockDisplay = 'The current items are:\n'
//     } else if (comm == 'c') {
//         let newItem = prompt('Enter the new item:');
//         inStock.push(newItem);
//         alert('Item added successfully!');
//     } else if (comm == 'u') {
//         let updatePos = Number(prompt('Enter the position of the item you want to update'));
//         let newName = prompt('Enter the new name');
//         inStock[updatePos-1] = newName;
//         alert('Item updated successfully!');
//     } else if (comm == 'd') {
//         let deletePos = Number(prompt('Enter the position of the item you want to delete'));
//         inStock.splice(deletePos-1, 1);
//         alert('Item deleted successfully!');
//     } else if (comm == 'esc') {
//         break;
//     } else {
//         alert('Invalid command');
//     }
// }
// Cau 5 // tham khao Nhat Minh 
// let tinhTong = prompt('Enter a squence of number, separated by ","');
// let newArray = tinhTong.split(',')
// {
//     for (let i = 0; i < newArray.length; i++) {
//         newArray[i] = Number(newArray[i]);
//     }
// }
// let sum = 0;
// {
//     for (let i = 0; i < newArray.length; i++) {
//         sum = sum + newArray[i];
//     }
// }
// alert(`The sum of these numbers is ${sum}`);
// Cau 6 
// let nmbStr = prompt('Enter a sequence of numbers, separated by \',\' and no space inbetween');
// let newArray = nmbStr.split(',');
// {
//     for (let i = 0; i < newArray.length; i++) {
//         newArray[i] = Number(newArray[i]);
//     }
// }
// let min = newArray[0];
// {
//     for (let i = 0; i < newArray.length; i++) {
//         if (newArray[i] > newArray[i + 1] && newArray[i + 1] < min) {
//             min = newArray[i + 1];
//         }
//     }
// }
// alert(`The smallest number in this sequence is ${min}`);
// Cau 7
// const nmbStr = [12, -23, 3, 54, -6];
// let guess = Number(prompt('Enter a number:'));
// let foundStatus = 0;
// for (i = 1; i <= nmbStr.length; i++) {
//     if (guess == nmbStr[i]) {
//         alert(`${guess} is found in my array at index ${i}`);
//         foundStatus = 1;
//         break;
//     }
// }
// if (foundStatus == 0) {
//     alert(`The number ${guess} is NOT found in my array`);
// } 
// Cau 8 
// console.log('Professional sheep farmer Vu Duc Nhat Minh, at attendance, here are my sheep sizes:')
// let flock = [34, 23, 260, 9, 161, 95, 216];
// console.log(...flock);
// function lineBrk() {
//     console.log(' ');
// }
// let max;
// //8.5
// for (let month = 1; month <= 5; month++) {
//     {
// //8.2
//         max = flock[0];
//         for (i = 0; i < flock.length - 1; i++) {
//             if (flock[i] <= flock[i + 1] && flock[i + 1] > max) {
//                 max = flock[i + 1];
//             }
//         }
//     }
//     console.log(`Now my biggest sheep has size ${max}. Shearing time!`);
//     lineBrk();
// //8.3
//     flock[flock.indexOf(max)] = 8;
//     console.log('After shearing, here is my flock:');
//     console.log(...flock);
//     lineBrk();
// //8.4
//     {
//         for (i = 0; i < flock.length; i++) {
//             flock[i] = flock[i] + 50;
//         }
//     }
//     console.log(`MONTH ${month}`);
//     console.log('A month has passed, here\'s my new flock size:');
//     console.log(...flock);
//     lineBrk();
// }
// //8.6
// let sum = 0;
// {
//     for (i = 0; i < flock.length; i++) {
//         sum = sum + flock[i];
//     }
// }
// lineBrk();
// console.log('The total size of my flock is: ' + sum);
// console.log(`I can sell my flock for ${sum} * $2 = $${sum*2}`);
// Cau 10
// let nameStr = prompt('Enter a sequence of names, separated by \', \'');
// let nameArray1 = nameStr.split(', ');
// let nameArray2 = [];
// let t;
// for (i = 0; i < nameArray1.length; i++) {
//     t = `<${nameArray1[i]}>`;
//     nameArray2.push(t);
// }
// alert(`First array:\n${nameArray1}\nSecond array:\n${nameArray2}`);
