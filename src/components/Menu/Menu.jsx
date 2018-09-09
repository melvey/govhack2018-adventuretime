import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.scss';

const layerList = {
	shared: 'shared',
	parking: 'parking',
	rental: 'rental',
	poi: 'poi'
};

class Menu extends Component {

	static propTypes = {
		active: PropTypes.bool,
		layers: PropTypes.arrayOf(PropTypes.string),
		addLayer: PropTypes.func,
		removeLayer: PropTypes.func
	};

	constructor(props) {
		super();

		this.props = props;
		this.state = {};
	}

	toggleLayer = (layer) => {
		console.log('toggle layer', layer);
		const layers = this.props.layers || [];
		if(layers.indexOf(layer) >= 0) {
			this.props.removeLayer(layer);
		} else {
			this.props.addLayer(layer);
		}
	}

	render() {
		console.log(this.props);
		const className = this.props.active
			? `${styles.container} ${styles.active}`
			: styles.container;

		const layers = this.props.layers || [];

		return (
			<div className={className}>
				<section className={styles.category}>
					<h2>Layers</h2>
					<div className={`${styles.item} ${layers.indexOf(layerList.shared) >=0 ? styles.itemActive : null}`} onClick={() => this.toggleLayer(layerList.shared)}>Shared Paths</div>
					<div className={`${styles.item} ${layers.indexOf(layerList.parking) >=0 ? styles.itemActive : null}`} onClick={() => this.toggleLayer(layerList.parking)}>Bike Parking</div>
					<div className={`${styles.item} ${layers.indexOf(layerList.rental) >=0 ? styles.itemActive : null}`} onClick={() => this.toggleLayer(layerList.rental)}>Bike Rental</div>
					<div className={`${styles.item} ${layers.indexOf(layerList.poi) >=0 ? styles.itemActive : null}`} onClick={() => this.toggleLayer(layerList.poi)}>Points of interest</div>
				</section>
				<section>
					<h2>Filters</h2>
					<div className={styles.item}>Favourites</div>
					<div className={styles.item}>Suggestions</div>
					<div className={styles.item}>Tags</div>
					<div className={styles.item}>Difficulty</div>
					<div className={styles.item}>Other Filters</div>
				</section>
			</div>
		);
	}

}

export default Menu;
