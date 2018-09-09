/**
* MapReducer.js
* Redux Reducer for map
**/

import actionTypes from '../actionTypes';
import fudgedRoute from '../../data/fudgedRoute.json';

function handleSetLocation(state, data) {
  return Object.assign(
		{},
		state,
		{
			location: {
				latitude: data.latitude,
				longitude: data.longitude
			}
		}
	);
}

function handleSetToLocation(state, data) {
  return Object.assign(
		{},
		state,
		{
			toLocation: {
				latitude: data.latitude,
				longitude: data.longitude
			}
		}
	);
}

function handleSetParking(state, data) {
	return Object.assign(
		{},
		state,
		{
			parking: data
		}
	);
}

function handleSetFromLocation(state, data) {
  return Object.assign(
		{},
		state,
		{
			fromLocation: {
				latitude: data.latitude,
				longitude: data.longitude
			}
		}
	);
}

function handleShowParking(state, data) {
	return Object.assign(
		{},
		state,
		{
			showParking: data
		}
	);
}

function handleSetBikeRenting(state, data) {
    return Object.assign(
        {},
        state,
        {
            bikeRenting: data
        }
    );
}

function handleShowBikeRenting(data) {
    return Object.assign(
        {},
        state,
        {
            showBikeRenting: data
        }
    );

function handleSetRoute(state, data) {
	let routeData = data;
	if(routeData.message === 'Too Many Requests') {
			routeData = fudgedRoute;
			console.log('Too many requests, fudging data');
	}
			
	return Object.assign(
		{},
		state,
		{
			route: routeData
		}
	);
}

export default function setmapReducer(state, action) {
	switch(action.type) {
		case actionTypes.setLocation:
			return handleSetLocation(state, action.payload);
		case actionTypes.setToLocation:
			return handleSetToLocation(state, action.payload);
		case actionTypes.setFromLocation:
			return handleSetFromLocation(state, action.payload);
		case actionTypes.setParking:
			return handleSetParking(state, action.payload);
		case actionTypes.showParking:
			return handleShowParking(state, action.payload);
<<<<<<< HEAD
        case actionTypes.setBikeRenting:
            return handleSetBikeRenting(state, action.payload);
        case actionTypes.showBikeRenting:
            return handleShowBikeRenting(state, action.payload);
=======
		case actionTypes.setRoute:
			return handleSetRoute(state, action.payload);
>>>>>>> master
		default:
			return state || {};
	}
}
