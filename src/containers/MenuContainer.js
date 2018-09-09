import {connect} from 'react-redux';
import Menu from '../components/Menu';
import store from '../redux/store';
import addLayerAction from '../redux/actions/AddLayerAction';
import removeLayerAction from '../redux/actions/RemoveLayerAction';

function addLayer(layer) {
	store.dispatch(addLayerAction(layer));
}


function removeLayer(layer) {
	store.dispatch(removeLayerAction(layer));
}

const mapStateToProps = (state) => ({
	addLayer,
	removeLayer,
	...state.map
});


const ReduxContainer = connect(mapStateToProps)(Menu);

export default ReduxContainer;
