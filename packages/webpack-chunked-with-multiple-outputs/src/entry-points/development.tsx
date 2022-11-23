import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from '../subpackages/home';
import { RegionPage } from '../subpackages/region';

import '../subpackages/shared/styles/index.scss';

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/region" element={<RegionPage />} />
            </Routes>
        </BrowserRouter>
    );
}

function mountAppOnEl() {
    const appRoot = createRoot(document.getElementById('pokemon-dev-server-page-mount')!);
    appRoot.render(<App />);
}

mountAppOnEl();