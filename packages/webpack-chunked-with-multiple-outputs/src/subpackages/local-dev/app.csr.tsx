import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import { HomePage } from '../home';
import { RegionPage } from '../region';
import { AggregateProvider } from '../shared';

import '../shared/styles/index.scss';

function HomeWithSafeCSRNavigate(){
    const navigate = useNavigate();
    return (
        <HomePage navFn={() => navigate('/region')}/>
    )
}

export function AppWithClientRouting(){
    return (
        <AggregateProvider>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomeWithSafeCSRNavigate /> } />
                <Route path="/region" element={ <RegionPage /> } />
            </Routes>
          </BrowserRouter>
        </AggregateProvider>
    );
}

export function mountAppOnEl(el: HTMLElement) {
    const appRoot = createRoot(el);
    appRoot.render(<AppWithClientRouting />);
}