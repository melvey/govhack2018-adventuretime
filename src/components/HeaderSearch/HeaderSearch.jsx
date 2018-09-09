import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderSearch.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import store from '../../redux/store';
import setFromLocationAction from '../../redux/actions/SetFromLocationAction';
import setToLocationAction from '../../redux/actions/SetToLocationAction';

class HeaderSearch extends Component {

	static propTypes = {
		className: PropTypes.string
	};

	constructor(props) {
		super();
		this.props = props;
		this.state = {
			'searchActive': false,
			'fromValue': '',
			'fromCoord': {
				'lat': '',
				'lng': ''
			},
			'fromOptions': [],
			'toValue': '',
			'toCoord': {
				'lat': '',
				'lng': ''
			},
			'toOptions': [],
			'difficulty': {
				'easy': true,
				'medium': false,
				'hard': false,
				'legendary': false
			}
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.toggleSearch = this.toggleSearch.bind(this);
		this.toggleDifficulty = this.toggleDifficulty.bind(this);
		this.getLocationOptions = this.getLocationOptions.bind(this);
		this.selectLocation = this.selectLocation.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
		this.getLocationOptions({
			type: e.target.name.replace('Value', ''),
			str: e.target.value
		})
	}
	toggleSearch() {
		this.setState({
			'searchActive': !this.state.searchActive
		})
	}
	toggleDifficulty(e) {
		let newDifficulty = this.state.difficulty;
		newDifficulty[e.target.name] = !this.state.difficulty[e.target.name];
		this.setState({
			newDifficulty
		})
	}
	getLocationOptions({type, str}) {
		function bbox(lat, lng) {
			//Earth’s radius, sphere
			const R=6378137;
			//offsets in meters
			const offset = 10000;
			//Coordinate offsets in radians
			const dLat = offset/R;
			const dLng = offset/(R*Math.cos(Math.PI*lat/180));
			//OffsetPosition, decimal degrees
			return `${lat + dLat * 180/Math.PI}, ${lng + dLng * 180/Math.PI}, ${lat - dLat * 180/Math.PI}, ${lng - dLng * 180/Math.PI}`;
			// const latO = lat + dLat * 180/Math.PI
			// const lngO = lng + dLng * 180/Math.PI
			// const lat1 = lat - dLat * 180/Math.PI
			// const lng1 = lng - dLng * 180/Math.PI
			// return `${lat0}, ${lng0}, ${lat1}, ${lng1}`
		}
		// BBOX IS BROKEN
		const viewBox = bbox(-12.467332, 130.845904);
		const limit = 5;
		const url = (`https://nominatim.openstreetmap.org/search?q=${encodeURI(str)}+Darwin+Australia&format=json&limit=${limit}`);
		let newState = {};
		const otherType = type === 'to' ? 'fromOptions' : 'toOptions';

		fetch(url)
			.then(response => response.json())
			.then(data => {
				newState[`${type}Options`] = data;
				newState[otherType] = [];
				this.setState({...newState});
			});
	}
	selectLocation(e) {
		const valueKey = e.currentTarget.classList[1].replace('Options', 'Value');
		let newState = {};
		newState[valueKey] = e.currentTarget.innerText;
		newState[e.currentTarget.classList[1]] = [];
		this.setState({...newState});
		const coords = {
			'latitude': e.currentTarget.attributes.lat.value,
			'longitude': e.currentTarget.attributes.lng.value
		}
		if (valueKey === 'fromValue') {
			store.dispatch(setFromLocationAction(coords))
		} else if (valueKey === 'toValue') {
			store.dispatch(setToLocationAction(coords))
		}
	}

	render() {
		const className = this.props.className ? `${styles.content} ${this.props.className}` : styles.content;
		let optionsListType;
		if (this.state.fromOptions.length > this.state.toOptions.length) {
			optionsListType = 'fromOptions';
		} else if (this.state.fromOptions.length < this.state.toOptions.length) {
			optionsListType = 'toOptions';
		} else {
			optionsListType = '';
		}
		return (
			<div className={styles.container}>
				{ !this.state.searchActive
				?
					<div className={styles.title}>
						<h1>Everyday Active</h1>
						<button className={styles.searchBtn} onClick={this.toggleSearch} >
							<FontAwesomeIcon
								icon="search"
							/>
						</button>
					</div>
				:
					<div className={styles.search}>
						<input
							type="text"
							placeholder="From"
							value={this.state.fromValue}
							onChange={this.handleInputChange}
							name="fromValue"
						/>
						<input
							type="text"
							placeholder="To"
							value={this.state.toValue}
							onChange={this.handleInputChange}
							name="toValue"
						/>
						<button
							className={styles.closeSearch}
							onClick={this.toggleSearch}
							>
							<FontAwesomeIcon
								icon="times"
							/>
						</button>
						<div className={styles.difficultyList}>
								<button
									name="easy"
									className={this.state.difficulty.easy ? styles.active : ""}
									onClick={this.toggleDifficulty}
								>
									Easy
								</button>
								<button
									name="medium"
									className={this.state.difficulty.medium ? styles.active : ""}
									onClick={this.toggleDifficulty}
								>
									Medium
								</button>
								<button
									name="hard"
									className={this.state.difficulty.hard ? styles.active : ""}
									onClick={this.toggleDifficulty}
								>
									Hard
								</button>
								<button
									name="legendary"
									className={this.state.difficulty.legendary ? styles.active : ""}
									onClick={this.toggleDifficulty}
								>
									Legendary
								</button>
						</div>
					</div>
				}
				{ optionsListType !== '' &&
					<div className={styles.locOptionsList}>
						{this.state[optionsListType].map( (option, i) => (
							<div
								className={`${styles.locOption} ${optionsListType}`}
								key={i}
								onClick={this.selectLocation}
								lat={option.lat}
								lng={option.lon}
								>
								<img src={option.icon} />
								<span>{option.display_name}</span>
							</div>
						))}
					</div>
				}
			</div>
		);
	}

}

export default HeaderSearch;
