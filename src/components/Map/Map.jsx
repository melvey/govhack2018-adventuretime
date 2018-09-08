import React, {Component, PropTypes} from 'react';
import styles from './Map.scss';

class Map extends Component {

	static propTypes = {
		className: PropTypes.string
	};

	constructor(props) {
		super();

		this.props = props;
		this.state = {};
	}

	render() {
		const className = this.props.className ? `${styles.content} ${this.props.className}` : styles.content;
		return (
			<div className={className}>
			</div>
		);
	}

}

export default Map;
