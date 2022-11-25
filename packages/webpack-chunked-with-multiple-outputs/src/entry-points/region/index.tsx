import React from 'react';
import ReactDOM from 'react-dom/client';
import { RegionPage } from '../../subpackages/region';
import { AggregateProvider } from '../../subpackages/shared';

export function mountHomePageOnEl(el: HTMLElement) {
    const root = ReactDOM.createRoot(el);
    root.render(
        <AggregateProvider>
            <RegionPage />
        </AggregateProvider>
    );
}

mountHomePageOnEl(document.getElementById('pokemon-region-page-mount')!);
