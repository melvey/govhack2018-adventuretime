/** 
* RemoveLayerAction.js.js
* A sample action definition to call a redux reducer
**/

import actionTypes from '../actionTypes';

/**
 * @param {Object} dummy data to be saved to the store
 **/
export default function removeLayerAction(data) {
	return {
		type: actionTypes.removeLayer,
		payload: data
	};
}

