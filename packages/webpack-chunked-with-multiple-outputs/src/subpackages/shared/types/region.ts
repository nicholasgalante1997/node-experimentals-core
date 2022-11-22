export type Region = "Sinnoh" | "Hoenn" | "Kanto" | "Johto" | "Galar" | "Hisui" | "Alola";

export type Pokemon = {
    charImg: string;
    region: Region;
    name: string;
    type: 'water' | 'fire' | 'flying' | 'dark' | 'psychic' | 'dragon' | 'electric' | 'grass' | 'ice' | 'steel' | 'fighting' | 'ghost' | 'fairy' | 'normal';
    pokedexNumericalIndex: {
        pokedex: number | string;
        key: number | string;
    }
};