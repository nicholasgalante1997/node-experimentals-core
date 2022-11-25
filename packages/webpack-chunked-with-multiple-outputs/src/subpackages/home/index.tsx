import React from 'react';
import { Button, Container } from '@nickgdev/hellerui';

import { PokemonComponent } from '../shared/components';
import { useGetAllPokemon, useGetPokemonByName } from '../shared/contexts';
import * as inlineStyle from '../shared/styles/inline';

type HomePageProps = {
    navFn?: () => void;
};

export function HomePage(props: HomePageProps){

    function safeNavigate(location: string) {
        if (typeof window !== 'undefined') {
            window.location.replace(location);
        }
    }

    const { navFn = () => safeNavigate('/region') } = props;

    const pokemon = useGetAllPokemon().map(p => p.name);
    const randPokemon = Math.floor(Math.random() * (pokemon.length - 1));
    const pokemonRep = useGetPokemonByName(pokemon[randPokemon]);

    return (
        <Container 
            id="pika-home" 
            customStyles={{ 
                ...inlineStyle.containerAsRow,
                ...inlineStyle.flexCentered,
                ...inlineStyle.noWrap,
                ...inlineStyle.overflowHidden
            }}
        >
            <Container 
                customStyles={{ 
                    ...inlineStyle.containerAsRow,
                    ...inlineStyle.flexCentered,
                }}
                tabIndex={0}
            >
                <PokemonComponent { ...pokemonRep! } hero />
            </Container>
            <Container 
                customStyles={{ 
                    ...inlineStyle.containerAsCol,
                    ...inlineStyle.flexCentered,
                }}
                tabIndex={0}
            >
                <h1 className="poke-font font-with-border-main">Catch `Em All!</h1>
                <Button 
                    aria-label='explore pokemon regions' 
                    className='home-button'
                    size='lg'
                    onClick={navFn}
                    ghost
                >
                    explore pokemon regions
                </Button>
            </Container>
        </Container>
    )
}