import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ModalFinishedRide.scss';

const weeklyRecomendation = 150;

class ModalFinishedRide extends Component {

	static propTypes = {
		className: PropTypes.string,
		showComplete: PropTypes.bool,
		lastRide: PropTypes.shape({
			duration: PropTypes.number
		}),
		route: PropTypes.shape({
			routes: PropTypes.arrayOf(PropTypes.shape({
				distance: PropTypes.number
			}))
		})
	};

	constructor(props) {
		super();

		this.props = props;
		this.state = {};
	}

	renderModal() {
		const className = this.props.className ? `${styles.content} ${this.props.className}` : styles.content;
		
		const totalDistance = this.props.route.routes.reduce((dist, route) => dist + route.distance, 0);
		const metres = Math.round(totalDistance % 1000);
		const km = Math.round((totalDistance - metres) / 1000);
		const distString = `${km > 0 ? `${km}km ` : ''} ${metres}metres `;

		const totalTime = Math.round(this.props.lastRide.duration / 1000);
		const seconds = totalTime % 60;
		const totalMinutes = (totalTime - seconds) / 60;
		const minutes = totalMinutes % 60;
		const hours = (totalMinutes - minutes) / 60;
		const timeString = `${hours > 0 ? `${hours} hours ` : ''}${minutes} mins ${seconds} seconds`;

		return (
			<div className={styles.container}>
				<h2>You have arrived</h2>
				<p>
					<span>You rode </span>
					<strong>{distString}</strong>
					<span> in </span>
					<strong>{timeString}</strong>
				</p>
				<p>You burnt <strong>42 calories</strong>, that is <strong>more than 20% of Australians</strong> achieve in a day!</p>
				<p>Keep it up to feel even better :)</p>
			</div>
		);
	}

	render() {
		if(this.props.showComplete) {
			return this.renderModal();
		}

		return null;
	}

}

export default ModalFinishedRide;
