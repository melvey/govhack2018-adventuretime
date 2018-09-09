import store from '../redux/store';
import setParkingAction from '../redux/actions/SetParkingAction';

const url = 'https://nominatim.openstreetmap.org/search?q=Darwin%20Cycle%20Parking&format=json';

function loadParking() {
	fetch(url)
		.then((response) => response.json())
		.then((data) => store.dispatch(setParkingAction(data)));
}

export default loadParking;
