import store from '../redux/store';
import setRouteAction from '../redux/actions/SetRouteAction';

const urlBase = 'http://router.project-osrm.org/route/v1/driving/';

function loadRoute(coords) {
	const coordString = coords.reduce((current, coord) => `${current ? `${current};` : ''}${coord.lat || coord[0]},${coord.lng || coord[0]}`, '');
	const url = `${urlBase}${coordString}`;
/*
	return fetch(url)
		.then((response) => response.json())
		.then((data) => store.dispatch(setRouteAction(data)));
*/
		// don't spam while we're developing
		setTimeout(() =>  store.dispatch(setRouteAction({message: 'Too Many Requests'})), 500);
}

export default loadRoute;
