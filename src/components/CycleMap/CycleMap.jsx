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
		loadLocation: PropTypes.func
	};

	constructor(props) {
		super();

		this.headerHeight = 200;
		this.footerHeight = 200;


		this.props = props;
		this.state = {};

		this.bikeRenting = [
            [-12.465502788900000, 130.840680072000000],
            [-12.466498190400000, 130.846449730000000],
            [-12.459216000000000, 130.840796000000000],
            [-12.461004000000000, 130.835717500000000],
            [-12.465282139300000, 130.843246538000000],
            [-12.467171624300000, 130.846382685000000],
            [-12.466721974900000, 130.848451717000000],
            [-12.376958903300000, 130.848133823000000],
            [-12.463160000000000, 130.838546000000000]
        ];
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

    showBikeRenting = (bikeRenting) => {
        if(this.state.markers) {
            this.state.markers.forEach((marker) => marker.remove());
        }

        const markers = bikeRenting.map((point) => {
            const marker = L.marker([point[0], point[1]]);
            marker.addTo(this.state.map);
            return marker;
        });
        this.setState({bikeRentingMarkers: markers});
    }

	componentWillReceiveProps(props) {
		if(this.props.location != props.location && this.state.map) {
			this.state.map.setView([props.location.latitude, props.location.longitude], 13);
		}

		if(this.props.parking != props.parking && this.state.map) {
			this.showParking(props.parking);
		}

        if(this.props.bikeRenting != props.bikeRenting && this.state.map) {
            this.showBikeRenting(props.bikeRenting);
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
