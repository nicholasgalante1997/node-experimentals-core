import { Region } from './region';

import PikachuImg from '../assets/pikachu.png';
import TotodileImg from '../assets/totodile.png';
import RockruffImg from '../assets/rockruff.png';
import AlolanVulpixImg from '../assets/alolan-vulpix.png';
import LarvitarImg from '../assets/larvitar.png';
import EeveeImg from '../assets/eevee.png';

export type Pokemon = {
    charImg: string;
    region: Region;
    name: string;
    type: 'water' | 'fire' | 'flying' | 'dark' | 'psychic' | 'dragon' | 'electric' | 'grass' | 'ice' | 'steel' | 'fighting' | 'ghost' | 'fairy' | 'normal' | 'ground' | 'rock';
    pokedexNumericalIndex?: {
        pokedex: number | string;
        key: number | string;
    }
};

export interface IPokedex {
    pokemon: Pokemon[];
    get(name: string): Pokemon | undefined;
};

export const Pokedex: IPokedex = {
    pokemon: [
        {
            name: 'Pikachu',
            charImg: PikachuImg,
            region: "Kanto",
            type: "electric"
        },
        {
            name: 'Eevee',
            charImg: EeveeImg,
            region: "Kanto",
            type: 'normal',
        },
        {
            name: 'Totodile',
            charImg: TotodileImg,
            region: "Johto",
            type: "water"
        },
        {
            name: 'Larvitar',
            charImg: LarvitarImg,
            region: 'Johto',
            type: 'dark'
        },
        {
            name: 'Rockruff',
            charImg: RockruffImg,
            region: 'Hisui',
            type: 'rock'
        },
        {
            name: 'Vulpix',
            charImg: AlolanVulpixImg,
            region: 'Alola',
            type: 'ice'
        }
    ],
    get(name) {
        return this.pokemon.find(p => p.name === name);
    },
};