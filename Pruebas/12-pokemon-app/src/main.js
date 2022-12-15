import createAlertVanilla from "./helpers/createAlertVanilla.js"

const form = document.querySelector('.main-form')
const pokemonInfo = document.querySelector('.pokemon-info')


const getPokemon = async (event) => {
  event.preventDefault()
  const query = form.pokemonName.value
  console.log(query)

  if (!query) {
    createAlertVanilla('No puedes dejar el campo vacío')
    return
  }

  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    
    if (resp.status === 404) {
      throw new Error('No se ha encontrado el Pokémon ' + query)
    }

    const pokemon = await resp.json()
    printPokemon(pokemon)
  } catch (err) {
    createAlertVanilla(err.message)
  }
}

const printPokemon = (pokemon) => {
  const pokemonMarkup = document.createElement('article')
  pokemonMarkup.className = 'pokemon'

  pokemonMarkup.innerHTML = `
  <img src="${pokemon.sprites.other.dream_world.front_default}">
  <h2 class="pokemon_name">${capitalize(pokemon.name)} - <span>${pokemon.order}</span></h2>
  <ul>
   <li>Height: <span>${pokemon.height}</span></li>
   <li>Weight: <span>${pokemon.weight}</span></li>
   <li>Type: <span>${pokemon.types[0].type.name} & ${pokemon.types[1].type.name}</span></li>
   <li>Abilities:
    <ul> 
      <li>${capitalize(pokemon.abilities[0].ability.name)}</li>
      <li>${capitalize(pokemon.abilities[1].ability.name)}</li>
    </ul>
   </li>
  </ul>
  `
  pokemonInfo.prepend(pokemonMarkup)
}

const capitalize = (text) => {
  return text.slice(0, 1).toUpperCase() + text.slice(1)
}


form.addEventListener('submit', (event) => getPokemon(event))