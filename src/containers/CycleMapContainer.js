import {connect} from 'react-redux';
import CycleMap from '../components/CycleMap';
import SharedPaths from '../components/SharedPaths';
import store from '../redux/store';
import setLocationAction from '../redux/actions/SetLocationAction';
import loadParking from '../loaders/loadParking';
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
		...state.map
	});
};


const ReduxContainer = connect(mapStateToProps)(CycleMap);

export default ReduxContainer;
