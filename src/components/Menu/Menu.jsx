import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.scss';

class Menu extends Component {

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
			<div className={styles.container}>
				<section className={styles.category}>	
					<h2>User Profile</h2>
					<div className={styles.item}>My Searches</div>
					<div className={styles.item}>My Places</div>
					<div className={styles.item}>My Adventures</div>
				</section>
				<section>
					<h2>Filters</h2>
					<div className={styles.item}>Favourites</div>
					<div className={styles.item}>Suggestions</div>
					<div className={styles.item}>Tags</div>
					<div className={styles.item}>Difficulty</div>
					<div className={styles.item}>Points of interest</div>
					<div className={styles.item}>Other Filters</div>
				</section>
			</div>
		);
	}

}

export default Menu;
