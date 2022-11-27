import { appState } from "../AppState.js"
import { SandboxPokemon } from "../Models/SandboxPokemon.js"

class SandboxPokemonsService {
    async getCaughtPokemon() {
        const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/KaylaCammack/pokemon')
        appState.caughtPokemon = res.data.map(data => new SandboxPokemon(data))
    }
    async catchWildPokemon() {
        let pokemon = appState.activePokemon
        pokemon.img = pokemon.img.front_default
        await axios.post('https://bcw-sandbox.herokuapp.com/api/KaylaCammack/pokemon/', pokemon)
        this.getCaughtPokemon()
        appState.emit('wildPokemon')
    }
    setActivePokemon(foundPokemon) {
        appState.activeCaughtPokemon = new SandboxPokemon(foundPokemon)
    }
    async deletePokemon(id) {
        let foundPokemon = appState.caughtPokemon.find(pokemon => pokemon.id === id)
        await axios.delete(`https://bcw-sandbox.herokuapp.com/api/KaylaCammack/pokemon/${id}`, foundPokemon)
        appState.caughtPokemon = appState.caughtPokemon.filter(pokemon => pokemon.id !== id)
        appState.caughtPokemon.length !== 0 ? appState.activeCaughtPokemon = appState.caughtPokemon[0] : appState.emit('wildPokemon')
        
    }
}

export const sandboxPokemonsService = new SandboxPokemonsService()