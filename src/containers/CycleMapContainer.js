import {connect} from 'react-redux';
import CycleMap from '../components/CycleMap';
import store from '../redux/store';
import setLocationAction from '../redux/actions/SetLocationAction';
import loadParking from '../loaders/loadParking';
import loadBikeRenting from '../loaders/loadBikeRenting';
import loadRoute from '../loaders/loadRoute';


function loadLocation() {
	navigator.geolocation.getCurrentPosition((position) => store.dispatch(setLocationAction(position.coords)));
}


const mapStateToProps = (state) => {
	if(state.map.toLocation && state.map.fromLocation) {
		loadRoute([state.map.fromLocation, state.map.toLocation]);
	}

	return ({
		loadLocation,
		loadParking,
        loadBikeRenting,
		...state.map
	});
};


const ReduxContainer = connect(mapStateToProps)(CycleMap);

export default ReduxContainer;
