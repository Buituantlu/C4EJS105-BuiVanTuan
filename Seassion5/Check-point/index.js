// Math.random();
// let monAn = ['Kem','Bim Bim','Snack','Bong ngo','Hot Dog'];
// let show = monAn[Math.floor(Math.random() * monAn.length)];
// console.log(show);
// // 1.3 1.4 // tham khao nhat minh
// const quizzes = [
//     q1 = {
//         question: ('Which fictional detective lived at 221b Baker Street?'),
//         choices: [
//             'Watson',
//             'Sam Spade',
//             'Scubidu',
//             'Sherlock Holmes',],
//         c1: false,
//         c2: false,
//         c3: false,
//         c4: true,
//     },
//     q2 = {
//         question: ('What sweet food made by bees using nectar from flowers?'),
//         choices: [
//             'Bread',
//             'Honey',
//             'Sugar',
//             'Potent',],
//         c1: false,
//         c2: true,
//         c3: false,
//         c4: false,
//     },
//     q3 = {
//         question: ('How many legs do an octopus has?'),
//         choices: [
//             '4 legs',
//             'no legs',
//             '8 legs',
//             '2 legs'],
//         c1: false,
//         c2: false,
//         c3: false,
//         c4: true,
//     }
// ];
// let originalQLength = quizzes.length;
// let usrPoint = 0;
// while (true) {
//     if (quizzes.length == 0) {
//         alert('We\'re out of quizzes, unfortunately');
//         break;
//     } else {
//         let randomGen = Math.floor(Math.random() * ((quizzes.length) - 1));
//         while (true) {
//             let answer = Number(prompt(`${quizzes[randomGen].question}
// 1. ${quizzes[randomGen].choices[0]}
// 2. ${quizzes[randomGen].choices[1]}
// 3. ${quizzes[randomGen].choices[2]}
// 4. ${quizzes[randomGen].choices[3]}`));
//             if (quizzes[randomGen].choices[answer - 1] == undefined || quizzes[randomGen].choices[answer - 1] == null) {
//                 alert('Invalid answer');
//             } else if (quizzes[randomGen][`c${answer}`] == true) {
//                 alert('Congratulation!');
//                 usrPoint++;
//                 break;
//             } else {
//                 alert('Sorry, You lose!');
//                 break;
//             }
//         }
//         quizzes.splice(randomGen, 1);
//     }
// }
// alert(`Your final score is: ${usrPoint}/${originalQLength}`);

// 2.1
// let keyWork = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey','love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
// let list = {};
// for(let i in keyWork){
//     if(list[keyWork[i]]){
//         list[keyWork[i]]++;
//     }else{
//         list[keyWork[i]] = 1;
//     }
// }
// console.log(list);
// 2.2  tham khao viet do
// const inventory = [
//     {
//         name:"HP Envy 13ap",
//         price: 21000,
//         brand: 'HP',
//         quantity: 5,
//     },
//     {
//         name:"Dell XPS 9370",
//         price: 30000,
//         brand:'Dell',
//         quantity: 1,
//     },
//     {
//         name:'Dell Inspiron 3567',
//         price: 9300,
//         brand: 'Dell',
//         quantity: 12,
//     },
//     {
//         name: 'Dell Latitude E5450',
//         price: 8600,
//         brand: 'Dell',
//         quantity: 2,
//     },
//     {
//         name: 'Asus Zenbook',
//         brand: 'Asus',
//         price: 20000,
//         quantity: 4,
//     },
//     {
//         name: 'HP Pavilion',
//         brand: 'HP',
//         price: 14000,
//         quantity: 7,
//     },
// ];
// let inventoryByBrand = {};
// for(let laptop of inventory)
// {
//     if(inventoryByBrand[laptop.brand])
//         inventoryByBrand[laptop.brand].push(laptop);
//     else
//     {
//         inventoryByBrand[laptop.brand] = [];
//         inventoryByBrand[laptop.brand].push(laptop);
//     }
// }
// console.log(inventoryByBrand);
// let option = prompt("Which brand? HP/Asus/Dell?");
// let generations = '';
// let stt = 0;
// for(let laptop of inventoryByBrand[option])
// {
//     console.log(laptop.name, laptop.price);
//     generations += "\n" + laptop.name;
//     stt += laptop.price * laptop.quantity;
// }
// alert(`There are ${inventoryByBrand[option].length} generations of ${option} in inventory:\n${generations}\n\n With total value: ${stt}`);
