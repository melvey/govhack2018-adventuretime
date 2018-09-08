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
				<div className={styles.root}>
					<div className={styles.container}>
						<div className={styles.banner}>
							<h3 className={styles.bannerTitle}>Team Death Clock</h3>
							<p className={styles.bannerDesc}>Made for GovHack 2018</p>
						</div>
					</div>
				</div>
		);
	}

}

export default Footer;
