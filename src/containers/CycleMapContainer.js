import {connect} from 'react-redux';
import CycleMap from '../components/CycleMap';
import store from '../redux/store';
import setLocationAction from '../redux/actions/SetLocationAction';

function loadLocation() {
	navigator.geolocation.getCurrentPosition((position) => store.dispatch(setLocationAction(position.coords)));
}

const mapStateToProps = (state) => ({
	loadLocation,
	...state.map
});


const ReduxContainer = connect(mapStateToProps)(CycleMap);

export default ReduxContainer;
