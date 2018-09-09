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

export default function setmapReducer(state, action) {
	switch(action.type) {
		case actionTypes.setLocation:
			return handleSetLocation(state, action.payload);
		case actionTypes.setToLocation:
			return handleSetToLocation(state, action.payload);
		case actionTypes.setFromLocation:
			return handleSetFromLocation(state, action.payload);
		default:
			return state || {};
	}
}
