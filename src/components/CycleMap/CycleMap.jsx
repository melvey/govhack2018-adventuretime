import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from './CycleMap.scss';

class CycleMap extends Component {

	static propTypes = {
		className: PropTypes.string
	};

	constructor(props) {
		super();

		this.props = props;
		this.state = {};
	}

	render() {
		const position = [51.505, -0.09]
		return (
			<Map center={position} zoom={13}>
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
