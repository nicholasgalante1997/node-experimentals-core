import React from 'react';
import { Container } from '@nickgdev/hellerui';
import Pikachu from './pikachu.png';

export function HomePage(){
    return (
        <Container id="pika-home">
            <Container id="pika-home-img-container">
                <img src={Pikachu} alt="Pikachu!" height="650px" width="auto" />
            </Container>
        </Container>
    )
}