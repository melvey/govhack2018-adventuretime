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
		this.footerHeight = 100;


		this.props = props;
		this.state = {};
	}

	componentDidMount() {
		const height = window.innerHeight;
		const width = window.innerWidth;
		this.setState({width, height, addMap: true});
		this.props.loadLocation();
	}

	componentDidUpdate() {
		console.log('state', this.state);
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
		if (this.state.showSharedPaths) {
			L.geoJSON(geojsonFeature).addTo(mymap);
		}
		this.setState({map: mymap});
	}

	componentWillReceiveProps(props) {
		if(this.props.location != props.location && this.state.map) {
			this.state.map.setView([props.location.latitude, props.location.longitude], 13);
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
