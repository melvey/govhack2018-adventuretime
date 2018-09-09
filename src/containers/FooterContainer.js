import {connect} from 'react-redux';
import Footer from '../components/Footer';
import store from '../redux/store';
import startRideAction from '../redux/actions/StartRideAction';
import stopRideAction from '../redux/actions/StopRideAction';
import showCompleteAction from '../redux/actions/ShowCompleteAction';

function startRide() {
	console.log('start ride');
	store.dispatch(startRideAction(true));
}

function stopRide() {
	console.log('stop ride');
	store.dispatch(stopRideAction(true));
}

function closeDialog() {
	store.dispatch(showCompleteAction(false));
}

const mapStateToProps = (state) => ({
	closeDialog,
	startRide,
	stopRide,
	...state.ride
});


const ReduxContainer = connect(mapStateToProps)(Footer);

export default ReduxContainer;
