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

/*
function handleShowParking(state, data) {
	return Object.assign(
		{},
		state,
		{
			showParking: data
		}
	);
}
*/

function handleSetRoute(state, data) {
	console.log(data);
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

function handleAddLayer(state, data) {
	let layers = state.layers ? state.layers.slice(0) : [];
	if(layers.indexOf(data) >= 0) {
		return state;
	}

	layers.push(data);
	return Object.assign(
		{},
		state,
		{
			layers
		}
	);
}

function handleRemoveLayer(state, data) {
	let layers = state.layers ? state.layers.slice(0) : [];
	const index = layers.indexOf(data);
	if(index === -1) {
		return state;
	}

	layers.splice(index, 1);
	return Object.assign(
		{},
		state,
		{
			layers
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

/*
function handleShowBikeRenting(data) {
    return Object.assign(
        {},
        state,
        {
            showBikeRenting: data
        }
    );
}
*/

function handleSetPOIAction(state, data) {
  return Object.assign(
      {},
      state,
      {
          poi: data
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
/*
		case actionTypes.showParking:
			return handleShowParking(state, action.payload);
*/
		case actionTypes.setRoute:
			return handleSetRoute(state, action.payload);
		case actionTypes.addLayer:
			return handleAddLayer(state, action.payload);
		case actionTypes.removeLayer:
			return handleRemoveLayer(state, action.payload);
			case actionTypes.setBikeRenting:
					return handleSetBikeRenting(state, action.payload);
/*
			case actionTypes.showBikeRenting:
					return handleShowBikeRenting(state, action.payload);
*/
		case actionTypes.setPOIAction:
			return handleSetPOIAction(state, action.payload);
		default:
			return state || {layers: []};
	}
}
