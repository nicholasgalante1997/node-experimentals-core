import React from 'react';
import { PokeProvider } from './pokemon';

export function AggregateProvider({ children }: { children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[] }){
    return (
        <PokeProvider>
            {children}
        </PokeProvider>
    )
}

export * from './pokemon';