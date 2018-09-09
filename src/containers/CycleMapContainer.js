import {connect} from 'react-redux';
import CycleMap from '../components/CycleMap';
import store from '../redux/store';
import setLocationAction from '../redux/actions/SetLocationAction';
import loadParking from '../loaders/loadParking';
import loadRoute from '../loaders/loadRoute';
import loadPOI from '../loaders/loadPOI';
import removeLayerAction from '../redux/actions/RemoveLayerAction';
import addLayerAction from '../redux/actions/AddLayerAction';
import loadBikeRenting from '../loaders/loadBikeRenting';

function addLayer(layer) {
	store.dispatch(addLayerAction(layer));
}


function removeLayer(layer) {
	store.dispatch(removeLayerAction(layer));
}

function loadLocation() {
	navigator.geolocation.getCurrentPosition((position) => store.dispatch(setLocationAction(position.coords)));
}


const mapStateToProps = (state) => {
	if(state.map.toLocation && state.map.fromLocation && !state.map.route) {
		loadRoute([state.map.fromLocation, state.map.toLocation]);
		addLayer('parking');
	}

	return ({
		loadLocation,
		loadParking,
		loadBikeRenting,
		loadPOI,
		...state.map
	});
};

const ReduxContainer = connect(mapStateToProps)(CycleMap);

export default ReduxContainer;
