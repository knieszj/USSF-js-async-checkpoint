const fetch = require('node-fetch');
const fs = require('fs')

let pokemon = "butterfree"

function fetchStuff() {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(json => (json.types.map(element => element.type.name)))
        .then(data => console.log(pokemon + ": " + data.join(', ')))
}   

fetchStuff();


// 12: bug, flying
// output: Butterfree: bug, flying

//It worked!!