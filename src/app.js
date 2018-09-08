import {render} from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './components/App';
import config from './config/general'

const appContainer = document.getElementById('app');


const app = <Provider store={store}><BrowserRouter><App basePath={config.basePath} /></BrowserRouter></Provider>;


render(app, appContainer);
