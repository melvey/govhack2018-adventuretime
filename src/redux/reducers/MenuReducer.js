/**
* MenuReducer.js
* Redux Reducer for menu
**/

import actionTypes from '../actionTypes';

const base = {
	menuOpen: false
};

function handleToggleMenu(state, data) {
  return Object.assign({}, state, {menuOpen: !state.menuOpen});
}

export default function setmenuReducer(state, action) {
	switch(action.type) {
		case actionTypes.toggleMenu:
			return handleToggleMenu(state, action.payload);
		default:
			return state || base;
	}
}
