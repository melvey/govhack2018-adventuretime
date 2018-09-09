import {connect} from 'react-redux';
import ModalFinishedRide from '../components/ModalFinishedRide';

const mapStateToProps = (state) => ({
	// Modify this to only include the required properties
	...state.ride,
	route: state.map.route
});


const ReduxContainer = connect(mapStateToProps)(ModalFinishedRide);

export default ReduxContainer;
