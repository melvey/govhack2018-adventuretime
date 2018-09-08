import {connect} from 'react-redux';
import Header from '../components/Header';
import store from '../redux/store';
import toggleMenuAction from '../redux/actions/ToggleMenuAction';

function menuFunc() {
	console.log('open clicked');
	store.dispatch(toggleMenuAction());
}

const mapStateToProps = (state) => ({
	// Modify this to only include the required properties
	menuFunc,
	...state.menu
});


const ReduxContainer = connect(mapStateToProps)(Header);

export default ReduxContainer;
