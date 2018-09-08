/** 
* SetLocationAction.js.js
* A sample action definition to call a redux reducer
**/

import actionTypes from '../actionTypes';

/**
 * @param {Object} dummy data to be saved to the store
 **/
export default function setLocationAction(data) {
	return {
		type: actionTypes.setLocation,
		payload: data
	};
}

