import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderSearch.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
			'fromOptions': [],
			'toValue': '',
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
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log(e.target.name.replace('Value', ''));
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
			const dLng = offset/(R*Cos(Math.PI*lat/180));
			//OffsetPosition, decimal degrees
			latO = lat + dLat * 180/Math.PI
			lngO = lng + dLng * 180/Math.PI
			lat1 = lat - dLat * 180/Math.PI
			lng1 = lng - dLng * 180/Math.PI
		}
		const url = (`https://nominatim.openstreetmap.org/search?q=${encodeURI(str)}&format=json`);
		let newState = {};

		fetch(url)
			.then(response => response.json())
			.then(data => {
				newState[`${type}Options`] = data;
				this.setState({...newState});
			});

	}

	render() {
		const className = this.props.className ? `${styles.content} ${this.props.className}` : styles.content;
		return (
			<div className={styles.container}>
				{ !this.state.searchActive
				?
					<div className={styles.title}>
						<h1>AdventureTime</h1>
						<button onClick={this.toggleSearch} >
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
				{ this.state.fromOptions.length > 0 &&
					<div className={styles.locOptionsList}>
						{this.state.fromOptions.map( (option, i) => (
							<div className={styles.locOption} key={i}>
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
