import React from 'react';
import { Container } from '@nickgdev/hellerui';


type RegionPageProps = {
    region: Region;
};

export function RegionPage(){
    return (
        <Container id="pika-region">
            <Container id="pika-region-content-container">
                <h1></h1>
            </Container>
        </Container>
    )
}