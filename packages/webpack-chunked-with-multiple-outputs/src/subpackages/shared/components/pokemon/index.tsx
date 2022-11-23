import { Pokemon } from '../../types';
import React from 'react';
import { Container } from '@nickgdev/hellerui';

type NativePokemonComponentProps = {
    withStats?: boolean;
    hero?: boolean;
    playful?: boolean;
};

export type PokemonProps = Pokemon & NativePokemonComponentProps;

export function PokemonComponent(props: PokemonProps){
    const {
        name,
        charImg,
        region,
        type,
        hero = false,
        playful = false,
        withStats = false,
        pokedexNumericalIndex
    } = props;
    let classname = '';
    if (hero) {
        classname += 'hero-img ';
    }
    return (
        <Container 
            tabIndex={0} 
            id="pika-home-img-container"
        >
            <img 
                src={charImg}
                alt={`${name} - ${region} - ${type} Type Pokemon`}
                tabIndex={0} 
            />
        </Container>
    );
}
