import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.scss';

class Footer extends Component {

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
				<p>Footer</p>
			</div>
		);
	}

}

export default Footer;
