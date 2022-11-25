import React from 'react';
import ReactDOM from 'react-dom/client';
import { RegionPage } from '../../subpackages/region';
import { AggregateProvider } from '../../subpackages/shared';

import '../../subpackages/shared/styles/index.scss';
import '@nickgdev/hellerui/lib/index.css';

ReactDOM.hydrateRoot(document.getElementById('react-agnostic-mount')!, (
    <AggregateProvider>
        <RegionPage />
    </AggregateProvider>
));
