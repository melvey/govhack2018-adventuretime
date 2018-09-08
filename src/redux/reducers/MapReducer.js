/**
* MapReducer.js
* Redux Reducer for map
**/

import actionTypes from '../actionTypes';


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

function handleSetParking(state, data) {
	return Object.assign(
		{},
		state,
		{
			parking: data
		}
	);
}

function handleShowParking(data) {
	return Object.assign(
		{},
		state,
		{
			showParking: data
		}
	);
}

export default function setmapReducer(state, action) {
	switch(action.type) {
		case actionTypes.setLocation:
			return handleSetLocation(state, action.payload);
		case actionTypes.setParking:
			return handleSetParking(state, action.payload);
		case actionTypes.showParking:
			return handleShowParking(state, action.payload);
		default:
			return state || {};
	}
}
