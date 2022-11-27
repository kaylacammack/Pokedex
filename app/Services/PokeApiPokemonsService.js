import { appState } from "../AppState.js"
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js"

class PokeApiPokemonsService {
    async getPokemon() {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        appState.wildPokemon = res.data.results.sort((a, b) => 0.5 - Math.random())
        this.getPokemonByUrl(res.data.results[0].url)
    }
    async getPokemonByUrl(url) {
        const res = await axios.get(url)
        appState.activePokemon = new PokeApiPokemon(res.data)
    } 

    setActivePokemon() {
        let randomPokemon = appState.wildPokemon[Math.floor(Math.random() * appState.wildPokemon.length)]
        appState.activePokemon = this.getPokemonByUrl(randomPokemon.url)
    }
}

export const pokeApiPokemonsService = new PokeApiPokemonsService()