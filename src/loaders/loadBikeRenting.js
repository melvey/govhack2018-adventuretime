import store from '../redux/store';
import setBikeRentingAction from '../redux/actions/SetBikeRentingAction';

const url = 'bikeRenting.json';

function loadBikeRenting() {
	fetch(url)
		.then((response) => response.json())
		.then((data) => store.dispatch(setBikeRentingAction(data)));
}

export default loadBikeRenting;
