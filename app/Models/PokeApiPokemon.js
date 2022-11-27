export class PokeApiPokemon {
    constructor(data) {
        this.abilities = data.abilities
        this.baseExperience = data.base_experience
        this.forms = data.forms
        this.gameIndices = data.game_indices
        this.height = data.height
        this.heldItems = data.held_items
        this.id = data.id
        this.isDefault = data.is_default
        this.locationAreaEncounters = data.location_area_encounters
        this.moves = data.moves
        this.name = data.name
        this.order = data.order
        this.pastTypes = data.past_types
        this.species = data.species
        this.img = data.sprites
        this.stats = data.stats
        this.types = data.types
        this.weight = data.weight
    }

    get PokeApiTemplate() {
        return /*html*/ `
		<div class="card">
			<div class="row">
				<h5
					class="card-title redBackgroundColor text-center p-4 col-12"
				>
					${this.name}
				</h5>
			</div>
			<div class="card-body text-center">
				<img style="width: 300px;" src="${this.img.front_default}" />
			</div>
			<div class="card-footer row redBackgroundColor">
				<span class="col-6">Height: ${this.height}</span
				><span class="col-6">Weight: ${this.weight}</span>
				<span class="col-12">Types: ${this.weight}</span>
				<div class="d-flex justify-content-end">
					<button
                        onclick="app.sandboxPokemonsController.catchWildPokemon()"
						class="btn btn-outline-danger col-2"
					>
						Catch
					</button>
				</div>
			</div>
		</div>
        `
    }

    
}

