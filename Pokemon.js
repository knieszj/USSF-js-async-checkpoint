const fetch = require('node-fetch');
const fs = require('fs')

let userInput = () => processFile(console.log(process.argv[2]), process.argv[2])

let processFile = (input) =>{
    let inputText = fs.readFileSync(input)
    let pokemonArray = inputText.split('\n')
    pokemonArray.map(pokemon => fetchStuff(pokemon))
    //here we find out what pokemon are in the list
}


let fetchStuff = (pokemon) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(json => (json.types.map(element => element.type.name)))
        .then(data => console.log(pokemon + ": " + data.join(', ')))
}

userInput()


