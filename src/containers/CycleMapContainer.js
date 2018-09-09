import {connect} from 'react-redux';
import CycleMap from '../components/CycleMap';
import store from '../redux/store';
import setLocationAction from '../redux/actions/SetLocationAction';
import loadParking from '../loaders/loadParking';
import loadBikeRenting from '../loaders/loadBikeRenting';

function loadLocation() {
	navigator.geolocation.getCurrentPosition((position) => store.dispatch(setLocationAction(position.coords)));
}

const mapStateToProps = (state) => ({
	loadLocation,
	loadParking,
	loadBikeRenting,
	...state.map
});


const ReduxContainer = connect(mapStateToProps)(CycleMap);

export default ReduxContainer;
