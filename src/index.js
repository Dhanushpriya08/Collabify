import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Create root element using new React 18 createRoot API
const root_element = document.getElementById('root');
const root = createRoot(root_element);

// Render the app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);