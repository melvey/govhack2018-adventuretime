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
			'inputValue': ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.clearInput = this.clearInput.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			'inputValue': e.target.value
		})
	}
	clearInput() {
		this.setState({
			'inputValue': ''
		})
	}

	render() {
		const className = this.props.className ? `${styles.content} ${this.props.className}` : styles.content;
		return (
			<div className={styles.search}>
				<input
					type="text"
					placeholder="Search"
					className={styles.searchInput}
					value={this.state.inputValue}
					onChange={this.handleInputChange}
				/>
				{ this.state.inputValue.length > 0 &&
					<FontAwesomeIcon
						icon="times"
						onClick={this.clearInput}
					/>
				}
			</div>
		);
	}

}

export default HeaderSearch;
