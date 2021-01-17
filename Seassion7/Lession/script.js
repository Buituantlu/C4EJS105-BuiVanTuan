// function hiDuyen(){
//     alert('Hi Nam');
//     alert('Duyen, function is great');
// }
// hiDuyen();
// function sayHi(name){
//     alert('Hi ' + name);
// }
// function sayGoodbye(name){
//     alert('Hi ' + name);
// }
// function testSay(f){
//     alert(`Here I Say`);
//     f();
// }
// testSay(sayHi('Nam'));
// testSay(sayGoodbye('Nam'));
// function run(){
//     console.log('ihi');
// }
// setTimeout(run, 5000);
// setTimeout(function(){
//     console.log('Hihi');
// }, 1000);
// setTimeout(() =>{
//     console.log('Hihi');
// }, 1000);
const d = document.getElementById(`msg`);
// d.addEventListener('click', () =>{
//     d.textContent = 'hi there';
// })
d.insertAdjacentHTML('beforeend',`
    <div>Cool</div>    
`)