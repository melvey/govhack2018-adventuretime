/**
* RootReducer.js
* The root reducer to combine all other reducers used in the application
**/

import {combineReducers} from 'redux';
import menuReducer from './MenuReducer';

export default combineReducers({
	menu: menuReducer
});
