import React, {Component} from 'react';
import PropTypes from 'prop-types';
import geojsonFeature from '../../data/sharedpaths.json';
import styles from './CycleMap.scss';


class CycleMap extends Component {

	static propTypes = {
		className: PropTypes.string,
		location: PropTypes.shape({
			latitude: PropTypes.number,
			longitude: PropTypes.number
		}),
		loadLocation: PropTypes.func
	};

	constructor(props) {
		super();

		this.headerHeight = 100;
		this.footerHeight = 80;

		this.props = props;
		this.state = {layerData: {}};
	}

	componentDidMount() {
		const height = window.innerHeight;
		const width = window.innerWidth;
		this.setState({width, height, addMap: true});
		this.props.loadLocation();

		this.props.loadParking();
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
		if(this.state.layerData.parking) {
			this.state.layerData.parking.forEach((marker) => marker.remove());
		}

		const markers = parking.map((point) => {
			const marker = L.marker([point.lat, point.lon]);
			marker.addTo(this.state.map);
			return marker;
		});
		return markers;
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

	toggleLayers = (showLayers, removeLayers) => {
		const layerData = Object.assign({}, this.state.layerData);

		showLayers.forEach((layer) => {
			if(layer === 'shared') {
				layerData.shared = L.geoJSON(geojsonFeature);
				layerData.shared.addTo(this.state.map);
			}
			if(layer === 'parking') {
				console.log('parking', this.props.parking);
				layerData.parking = this.showParking(this.props.parking);
			}
		});

		removeLayers.forEach((layer) => {
			if(layerData[layer]) {
				if(Array.isArray(layerData[layer])) {
					layerData[layer].forEach((component) => component.remove());
				} else {
					layerData[layer].remove();
				}
				delete layerData[layer];
			}
		});
		this.setState({layerData});
	}

	componentWillReceiveProps(props) {
		if(this.props.location != props.location && this.state.map) {
			this.state.map.setView([props.location.latitude, props.location.longitude], 13);
		}

		if(this.props.route != props.route && this.state.map) {
			this.showRoute(props.route);
			//this.showParking(props.parking);
		}


		if(this.props.layers != props.layers) {
			const newLayers = props.layers.filter((layer) => this.props.layers.indexOf(layer) === -1);
			const oldLayers = this.props.layers.filter((layer) => props.layers.indexOf(layer) === -1);

			this.toggleLayers(newLayers, oldLayers);
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
