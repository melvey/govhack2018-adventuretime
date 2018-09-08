import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './CycleMap.scss';


class CycleMap extends Component {

	static propTypes = {
		className: PropTypes.string
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


	}

	componentDidUpdate() {
		console.log('drawn stuff bruta');
		console.log('state', this.state);
		if(this.state.addMap) {
			this.loadMap();
			this.setState({addMap: false});
		}
	}

	loadMap() {
		console.log('load map');
		var mymap = L.map('cyclemap').setView([51.505, -0.09], 13);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				maxZoom: 18,
				id: 'mapbox.streets'
		}).addTo(mymap);
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
