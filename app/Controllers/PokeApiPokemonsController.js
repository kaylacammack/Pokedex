import { appState } from "../AppState.js";
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js";
import { pokeApiPokemonsService } from "../Services/PokeApiPokemonsService.js";
import { sandboxPokemonsService } from "../Services/SandboxPokemonsService.js";
import { setHTML } from "../Utils/Writer.js";

export class PokeApiPokemonsController {
    #wildPokemon
    #activePokemon = new PokeApiPokemon({})
    constructor() {
        this.getPokemon()
        appState.on('wildPokemon', () => this.#wildPokemon = appState.wildPokemon)
        appState.on('wildPokemon', () => this.setActivePokemon())
        appState.on('activePokemon', () => { this.#activePokemon = appState.activePokemon })
        appState.on('activePokemon', () => this.drawPokemon(this.#activePokemon))
    }

    async getPokemon() {
        try {
            await pokeApiPokemonsService.getPokemon()
        } catch (error) {
            
        }
    }
    setActivePokemon() {
        _setActivePokemon()
    }
    drawPokemon(drawPokemon) {
        _drawPokemon(drawPokemon)
    }
}

function _setActivePokemon() {
    pokeApiPokemonsService.setActivePokemon()
}

function _drawPokemon(pokemon = new PokeApiPokemon({})) {
    setHTML('pokeApi', pokemon.PokeApiTemplate)
}