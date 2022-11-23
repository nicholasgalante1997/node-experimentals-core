import { Pokemon } from './pokemon';
import { PokemonTrainer } from './trainer';

export type Region = "Sinnoh" | "Hoenn" | "Kanto" | "Johto" | "Galar" | "Hisui" | "Alola";

export type RegionRepresentative = {
    region: Region;
    pokemon: Pokemon;
    trainer: PokemonTrainer;
}