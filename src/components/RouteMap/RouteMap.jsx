import React, {Component, PropTypes} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import styles from './RouteMap.scss';

class RouteMap extends Component {

	static propTypes = {
		// className: PropTypes.string
	};

	constructor(props) {
		super();

		this.props = props;
		this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
		};
	}

	render() {
		const className = this.props.className ? `${styles.content} ${this.props.className}` : styles.content;
		const position = [this.state.lat, this.state.lng];
    return (
			<Map center={position} zoom={this.state.zoom}>
			  <TileLayer
			    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
			  />
			  <Marker position={position}>
			    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
			  </Marker>
			</Map>
    );
	}

}

export default Map;
