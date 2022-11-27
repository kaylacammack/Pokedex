import { appState } from "../AppState.js"
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js"
import { SandboxPokemon } from "../Models/SandboxPokemon.js"
import { sandboxPokemonsService } from "../Services/SandboxPokemonsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

export class SandboxPokemonsController {
    #caughtPokemon
    #activePokemon
    constructor() {
        appState.on('caughtPokemon', () => {this.#caughtPokemon = appState.caughtPokemon})
        appState.on('caughtPokemon', () => _drawCaughtPokemon(this.#caughtPokemon))
        appState.on('activeCaughtPokemon', () => {this.#activePokemon = appState.activeCaughtPokemon})
        appState.on('activeCaughtPokemon', () => _drawActivePokemon(this.#activePokemon))
        this.getCaughtPokemon()
    }
    setActivePokemon(id) {
        _setActivePokemon(id, this.#caughtPokemon)
    }
    drawActivePokemon(activePokemon) {
        _drawActivePokemon(activePokemon)
    }
    async catchWildPokemon() {
        try {
            await _catchWildPokemon()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }
    async getCaughtPokemon() {
        try {
            await _getCaughtPokemon()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }
    async deletePokemon(id) {
        try {
            await _deletePokemon(id)
        } catch (error) {
            
        }
    }
}

async function _deletePokemon(id) {
    await sandboxPokemonsService.deletePokemon(id)
}

function _setActivePokemon(id, caughtPokemon = [new SandboxPokemon({})]) {
    const foundPokemon = caughtPokemon.find(pokemon => pokemon.id === id)
    sandboxPokemonsService.setActivePokemon(foundPokemon)
}
function _drawActivePokemon(activePokemon = new SandboxPokemon({})) {
    setHTML('pokeApi', activePokemon.ActivePokemonTemplate)
}
function _drawCaughtPokemon(caughtPokemon = [new SandboxPokemon({})]) {
    let template = ''
    caughtPokemon.forEach(p => {
        template += p.CaughtPokemonTemplate
    });
    setHTML('sandboxPoke', template)
}


async function _catchWildPokemon() {
    await sandboxPokemonsService.catchWildPokemon()
}
async function _getCaughtPokemon() {
    await sandboxPokemonsService.getCaughtPokemon()
}
