import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CityListProvider } from './Context/CityListContext';

ReactDOM.render(
    <React.StrictMode>
        <CityListProvider>
            <App />
        </CityListProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

