// Cau 3-a
// for (let i=0;i<=6;i++){
//     console.log(i);
// }
// 3-b
// let x = prompt("Enter a number?")
// for (let i=0;i<x;i++){
//     console.log(i);
// }
// 3-c
// let n = prompt("Enter n")
// for (let i=3;i<n;i++){
//     console.log(i);
// }
// 3-d
// let n = prompt("Enter n")
// let c = prompt("Enter c")
// for (let i=c;i<n;i++){
//     console.log(i);
// }
// 3-e
// let n = prompt("Enter n")
// let c = prompt("Enter c")
// n = Number(n);
// c = Number(c);
// for (let i=c;i<n;i+=3){
//     console.log(i);
// }
// 3-f
// let n = prompt("Enter n")
// let c = prompt("Enter c")
// let s = prompt("Enter s")
// n = Number(n);
// c = Number(c);
// s = Number(s);
// for (let i=c;i<n;i+=s){
//     console.log(i);
// }
// Cau 4
// let n = prompt("Enter a number")
// let s=1;
// for (let i=1;i<=n;i++){
//     s=s*i;
// }
// alert(`The factorial of ${n} is ${s}`);
// Cau 5
// let x = prompt("How old are you?")
// if(x<14){
//     alert("You are not old enough to view this content");
// }
// else{
//     alert("Enjoy!");
// }
// cau 6
// let x = prompt("Enter a number")
// if(x>=0&&x<=4){
//     alert("Lower half of 9");
// }
// else if(x>=5&&x<=9){
//     alert("Higher half of 9");
// }
// Cau 7
// let n = prompt("n = ")
// let x = prompt("x = ")
// if(x<n/2){
//     alert(x+' is in lower half of '+n);
// }else if(x>n/2){
//     alert(x+' is in higher half of '+n);
// }else{
//     alert(x+' is in neither half of '+n);
// }
// Cau 8
// let x = prompt("x = ")
// if(x%2==1){
//     alert(x+" is an odd number");
// }else{
//     alert(x+" is an even number")
// }
// Cau 9-a
// let x = alert("6 L’s and H’s, half L’s, half H’s")
// for(let i=1;i<=6;i++){
//     if(i<=3){
//         console.log('L');
//     }else{
//         console.log('H');
//     }
// }
// 9-b
// let n = prompt("Enter the total number of L's and H's?")
// for(let i=0;i<n;i++){
//     if(i<n/2){
//         console.log('L');
//     }else{
//         console.log('H');
//     }
// }
// 9-c
// let x = alert("8 1’s and 0’s in total, consecutively")
// for(let i=0;i<8;i++){
//     if(i%2==0){
//         console.log(0);
//     }else{
//         console.log(1);
//     }
// }
// 9-d
// let n = prompt("Enter the total number of 1's and 0's?")
// for(let i=0;i<n;i++){
//     if(i%2==0){
//         console.log(0);
//     }else{
//         console.log(1);
//     }
// }
// Cau 10
// let kg = prompt("Your weight in kg?")
// let m = prompt("Your height in cm?")
// let BMI = kg/(m*m*0.0001);
// if(BMI<16){
//     alert("Your BMI is "+BMI.toFixed(1));
//     alert("You are Severely underweight");
// }else if(BMI>=16||BMI<18.5){
//     alert("Your BMI is "+BMI.toFixed(1));
//     alert("You are Underweight");
// }else if(BMI>=18.5||BMI<25){
//     alert("Your BMI is "+BMI.toFixed(1));
//     alert("You are Normal");
// }else if(BMI>=25||BMI<30){
//     alert("Your BMI is "+BMI.toFixed(1));
//     alert("You are Overweight");
// }else if(BMI>=30){
//     alert("Your BMI is "+BMI.toFixed(1));
//     alert("You are Obese");
// }
// Cau 11-a
// let square = repeat 4 (sequence[fd 50, rt 90])
// square
// 11-b
