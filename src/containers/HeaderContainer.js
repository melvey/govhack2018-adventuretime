import {connect} from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
	// Modify this to only include the required properties
	...state
});


const ReduxContainer = connect(mapStateToProps)(Header);

export default ReduxContainer;
