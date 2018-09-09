/**
* RootReducer.js
* The root reducer to combine all other reducers used in the application
**/

import {combineReducers} from 'redux';
import menuReducer from './MenuReducer';
import mapReducer from './MapReducer';
import rideReducer from './RideReducer';

export default combineReducers({
	menu: menuReducer,
	map: mapReducer,
	ride: rideReducer
});
