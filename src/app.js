import {render} from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './components/App';
import config from './config/general';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus, faCheck, faTimes, faSearch, faBicycle, faParking, faFlagCheckered } from '@fortawesome/free-solid-svg-icons'

const icons = [faHeart, faPlus, faCheck, faTimes, faSearch, faBicycle, faParking, faFlagCheckered];
icons.forEach( i => {
  library.add(i);
});

const appContainer = document.getElementById('app');


const app = <Provider store={store}><BrowserRouter><App basePath={config.basePath} /></BrowserRouter></Provider>;


render(app, appContainer);
