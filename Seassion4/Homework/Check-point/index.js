// let movie ={
//     Title: 'Iron Man',
//     Year: 2008,
//     Rate: 7.9,
// };
// 2.1
// let Youtobe ={
//     Name: 'Trực tiếp game',
//     Subscribe: 3,
//     View: 300,
//     Fan: 50,
// };
// 2.3
// let userInput = prompt("What you want to know?");
// if(userInput == 'Name' || userInput == 'Subcribe' || userInput == 'View' || userInput == 'Fan'){
//     alert('Attack on titans');
// }else{
//     alert(`${userInput} does not exist in our data`);
// }
// 3.1
// movie.Rate = 8.7;
// movie.Rate = 8.7+0.5;
// console.log(movie.Rate);
// 3.2
// let userInput = prompt("What you want to update?");
// let whatUpdate = prompt("What is the update?");
// if(userInput == 'Title'){
//     movie.Title = whatUpdate;
//     console.log("Done. New data:\n");
//     console.log(movie);
// }else if(userInput == 'Year'){
//     movie.Year = whatUpdate;
//     console.log("Done. New data:\n");
//     console.log(movie);
// }else if(userInput == 'Rate'){
//     movie.Rate = whatUpdate;
//     console.log("Done. New data:\n");
//     console.log(movie);
// }else{
//     alert('Thanks');
// }
// 4
// let userInput = prompt("What you want to update?");
// if(userInput == 'Title'){
//     let whatUpdate = prompt("What is the update?");
//     movie.Title = whatUpdate;
//     console.log("Done. New data:\n");
//     console.log(movie);
// }else if(userInput == 'Year'){
//     let whatUpdate = prompt("What is the update?");
//     movie.Year = whatUpdate;
//     console.log("Done. New data:\n");
//     console.log(movie);
// }else if(userInput == 'Rate'){
//     let whatUpdate = prompt("What is the update?");
//     movie.Rate = whatUpdate;
//     console.log("Done. New data:\n");
//     console.log(movie);
// }else{
//     alert("'"+userInput+"' "+"does not exist in our data,we will add new");
//     let newData = prompt("Enter the new data");
//     movie.userInput = newData;
//     console.log(movie);
// }
// 5
// let movie1 = {
//     Title: 'Iron Man',
//     Rate: 7.9,
//     Year: 2008,
// }
// let movie2 = {
//     Title: 'Doraemon',
//     Year: 2009,
//     Rate: 8.0,
// }
// let movie3 = {
//     Title: 'Dragonball',
//     Year: 2010,
//     Rate: 8.1,
// }
// let movie4 = {
//     Title: 'Attack on Titans',
//     Year: 2011,
//     Rate: 8.2,
// }
// let movieArrs = [movie1,movie2,movie3,movie4];
// for(let i = 0;i<movieArrs.length;i++){
//     console.log(movieArrs[i].Title);
//     console.log('Year: '+movieArrs[i].Year);
//     console.log('Rate: '+movieArrs[i].Rate);
//     console.log('--------------------------');
// }
// 6
// let movie ={
//     Title: 'Doraemon',
//     Year: 2008,
//     Rate: 7.9,
//     Casts: ['Doraemon','Nobita','Suneo'],
// };
// console.log(movie.Title);
// console.log('Year: '+movie.Year);
// console.log('Rate: '+movie.Rate);
// console.log('Casts: '+movie.Casts[0]+' '+movie.Casts[1]+' '+movie.Casts[2]);
// let addCast = prompt('Add new Cast: ');
// movie.Casts.push(addCast);
// console.log('Casts: '+movie.Casts[0]+' '+movie.Casts[1]+' '+movie.Casts[2]+' '+movie.Casts[3]);
// 7
let movie1 = {
    Title: 'Iron Man',
    Rate: 7.9,
    Year: 2008,
    Casts: ['Tony Stack','Nguoi nhen','Hulk'],
}
let movie2 = {
    Title: 'Doraemon',
    Year: 2009,
    Rate: 8.0,
    Casts: ['Doraemon','Nobita','Suneo'],
}
let movie3 = {
    Title: 'Dragonball',
    Year: 2010,
    Rate: 8.1,
    Casts: ['Songoku','Vegeta','Gohan'],
}
let movie4 = {
    Title: 'Attack on Titans',
    Year: 2011,
    Rate: 8.2,
    Casts: ['Eren','Armin','Mikasa'],
}
let movieArrs = [movie1,movie2,movie3,movie4];
for(let i = 0;i<movieArrs.length;i++){
    console.log(movieArrs[i].Title);
    console.log('Year: '+movieArrs[i].Year);
    console.log('Rate: '+movieArrs[i].Rate);
    console.log('Casts: '+movieArrs[i].Casts);
    console.log('--------------------------');
}