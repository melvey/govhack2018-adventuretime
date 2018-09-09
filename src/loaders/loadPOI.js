import store from '../redux/store';
import setPOIAction from '../redux/actions/SetPOIAction';

const url = 'https://nominatim.openstreetmap.org/search?q=NT+Darwin+Cafe&format=json';

function loadPOI() {
	console.log('LOADING');
	fetch(url)
		.then((response) => response.json())
		.then((data) => store.dispatch(setPOIAction(data)));
}

export default loadPOI;
