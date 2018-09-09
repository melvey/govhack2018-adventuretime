import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
						<button>
							<FontAwesomeIcon icon="heart" />
							Save
						</button>
						<button>
							<FontAwesomeIcon icon="plus" />
							Add
						</button>
							<button>
							<FontAwesomeIcon icon="check" />
							Start
						</button>
					</div>
				</div>
		);
	}

}

export default Footer;
