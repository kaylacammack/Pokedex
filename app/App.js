import { PokeApiPokemonsController } from "./Controllers/PokeApiPokemonsController.js";
import { SandboxPokemonsController } from "./Controllers/SandboxPokemonsController.js";

class App {
//   valuesController = new ValuesController();
    pokeApiPokemonsController = new PokeApiPokemonsController()
    sandboxPokemonsController = new SandboxPokemonsController()
}

window["app"] = new App();
