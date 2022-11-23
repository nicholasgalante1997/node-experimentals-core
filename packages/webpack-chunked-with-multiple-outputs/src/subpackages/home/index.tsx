import React from 'react';
import { Container } from '@nickgdev/hellerui';
import Pikachu from './pikachu.png';

type HomePageProps = {
    navFn: () => void;
};

export function HomePage(props: HomePageProps){
    return (
        <Container id="pika-home">
            <Container 
                tabIndex={0} 
                id="pika-home-img-container"
                width="min-content"
            >
                <img 
                    src={Pikachu} 
                    alt="Pikachu!" 
                    height="650px" 
                    width="auto" 
                    tabIndex={0} 
                />
            </Container>
            <Container tabIndex={0}>
                <button 
                    id="pika-home-trainer-explore-button"
                    tabIndex={0} 
                    aria-label='explore pokemon regions' 
                    onClick={props.navFn}
                >
                    explore pokemon regions
                </button>
            </Container>
        </Container>
    )
}