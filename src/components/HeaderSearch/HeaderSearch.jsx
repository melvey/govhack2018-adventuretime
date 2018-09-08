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
			'toValue': '',
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
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
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
			</div>
		);
	}

}

export default HeaderSearch;
