import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import journalEntries from './dummy-store';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App entries={journalEntries} />
    </BrowserRouter>,
    document.getElementById('root'));