import React from 'react';
import { Pokedex } from '../../types';

export const PokeContext = React.createContext<typeof Pokedex>(Pokedex);
export const PokeProvider = ({ children }: { children: React.ReactNode }) => (
    <PokeContext.Provider value={Pokedex}>
        {children}
    </PokeContext.Provider>
);

export const useGetPokemonByName = (name: string) => {
    const p = React.useContext(PokeContext);
    return p.get(name);
}

export const useGetAllPokemon = () => {
    const a = React.useContext(PokeContext);
    return a.pokemon;
}