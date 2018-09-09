import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ModalFinishedRide.scss';

class ModalFinishedRide extends Component {

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
			<div className={styles.container}>
				<h2>You have arrived</h2>
				<p>From <strong>48 Smith St</strong> to <strong>21 Kitchener Drive</strong> in <strong>4 mins 38 seconds</strong></p>
				<p>You burnt <strong>42 calories</strong>, that is <strong>more than 20% of Australians</strong> achieve in a day!</p>
				<p>Keep it up to feel even better :)</p>
			</div>
		);
	}

}

export default ModalFinishedRide;
