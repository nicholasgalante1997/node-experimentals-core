import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from '../../subpackages/home';
import { AggregateProvider } from '../../subpackages/shared';

export function mountHomePageOnEl(el: HTMLElement) {
    const root = ReactDOM.createRoot(el);
    root.render(
        <AggregateProvider>
            <HomePage />
        </AggregateProvider>
    );
}

mountHomePageOnEl(document.getElementById('pokemon-home-page-mount')!);
