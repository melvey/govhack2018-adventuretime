import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
		return (
			<iframe width="425"
					height="350"
					scrolling="no"
					src="https://www.openstreetmap.org/export/embed.html?bbox=130.82849895581606%2C-12.469098970752446%2C130.8487120829523%2C-12.455102963278183&amp;layer=cyclemap"
			></iframe>
		);
	}

}

export default CycleMap;
