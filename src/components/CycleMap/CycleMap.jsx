import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './CycleMap.scss';


class CycleMap extends Component {

	static propTypes = {
		className: PropTypes.string,
		location: PropTypes.shape({
			latitude: PropTypes.number,
			longitude: PropTypes.number
		}),
		loadLocation: PropTypes.func,
		loadRoute: PropTypes.func
	};

	constructor(props) {
		super();

		this.headerHeight = 200;
		this.footerHeight = 200;


		this.props = props;
		this.state = {};
	}

	componentDidMount() {
		const height = window.innerHeight;
		const width = window.innerWidth;
		this.setState({width, height, addMap: true});
		this.props.loadLocation();

		this.props.loadParking();
		const coords = [
			{
				lat: 130.8462611,
				lng: -12.4665183
			},
			{
				lat: 130.842553,
				lng: -12.4639231
			}
		];
		this.props.loadRoute(coords);

	}

	componentDidUpdate() {
		if(this.state.addMap) {
			this.loadMap();
			this.setState({addMap: false});
		}
	}

	loadMap() {
		var mymap = L.map('cyclemap').setView([-12.42283024081249, 130.8456], 13);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				maxZoom: 18,
				id: 'mapbox.streets'
		}).addTo(mymap);
		this.setState({map: mymap});
	}

	showParking = (parking) => {
		if(this.state.markers) {
			this.state.markers.forEach((marker) => marker.remove());
		}

		const markers = parking.map((point) => {
			const marker = L.marker([point.lat, point.lon]);
			marker.addTo(this.state.map);
			return marker;
		});
		this.setState({parkingMarkers: markers});
	}

	showRoute = (route) => {

		if(this.state.directionLine) {
			this.state.directionLine.remove();
		}

		const legs = route.routes[0].legs.map((leg) =>
			leg.steps.map((step) => new L.LatLng(step.intersections[0].location[1], step.intersections[0].location[0]))
		);
		const polylinePoints = [].concat.apply([], legs);
	 
	 var polylineOptions = {
				 color: 'blue',
				 weight: 6,
				 opacity: 0.9
			 };

	 var polyline = new L.Polyline(polylinePoints, polylineOptions);

	 this.state.map.addLayer(polyline);                        

	 // zoom the map to the polyline
	 this.state.map.fitBounds(polyline.getBounds());

	this.setState({directionLine: polyline});
	}

	componentWillReceiveProps(props) {
		if(this.props.location != props.location && this.state.map) {
			this.state.map.setView([props.location.latitude, props.location.longitude], 13);
		}

		if(this.props.parking != props.parking && this.state.map) {
			this.showParking(props.parking);
		}
		if(this.props.route != props.route && this.state.map) {
			this.showRoute(props.route);
		}
	}


	render() {
		const styles = {
			height: `${this.state.height - this.headerHeight - this.footerHeight}px`,
			width: `${this.state.width}px`
		};
		
		return this.state.height && this.state.width
		? ( <div id="cyclemap" style={styles} className={styles.container}> </div>)
		: null;
	}

}

export default CycleMap;
