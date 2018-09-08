import {connect} from 'react-redux';
import CycleMap from '../components/CycleMap';
import store from '../redux/store';
import setLocationAction from '../redux/actions/SetLocationAction';
import loadParking from '../loaders/loadParking';

function loadLocation() {
	navigator.geolocation.getCurrentPosition((position) => store.dispatch(setLocationAction(position.coords)));
}

const mapStateToProps = (state) => ({
	loadLocation,
	loadParking,
	...state.map
});


const ReduxContainer = connect(mapStateToProps)(CycleMap);

export default ReduxContainer;
