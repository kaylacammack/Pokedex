export class SandboxPokemon {
    constructor(data) {
        this.createdAt = data.createdAt
        this.height = data.height
        this.id = data.id
        this.img = data.img
        this.name = data.name
        this.types = data.types
        this.updatedAt = data.updatedAt
        this.user = data.user
        this.weight = data.weight
    }

    get CaughtPokemonTemplate() {
        return `<li onclick="app.sandboxPokemonsController.setActivePokemon('${this.id}')">${this.name}</li>`
    }
    get ActivePokemonTemplate() {
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
				<img style="width: 300px;" src="${this.img}" />
			</div>
			<div class="card-footer row redBackgroundColor">
				<span class="col-6">Height: ${this.height}</span
				><span class="col-6">Weight: ${this.weight}</span>
				<span class="col-12">Types: ${this.weight}</span>
				<div class="d-flex justify-content-end">
					<button
                        onclick="app.sandboxPokemonsController.deletePokemon('${this.id}')"
						class="btn btn-outline-danger col-2"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
        `
    }
}