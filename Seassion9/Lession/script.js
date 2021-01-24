async function load() {
    const conn = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu/");
    const data = await conn.json();
    return data;
}
console.log(load());
function generateId(){
    const x = Math.random();
    const y = x.toString(36);
    const z = y.substr(2,9);
    return z;
}
const myId = generateId();
console.log(load);