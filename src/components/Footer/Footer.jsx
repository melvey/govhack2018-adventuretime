import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {

	static propTypes = {
		className: PropTypes.string,
		startRide: PropTypes.func,
		stopRide: PropTypes.func,
		closeDialog: PropTypes.func,
		startTime: PropTypes.number
	};

	constructor(props) {
		super();

		this.props = props;
		this.state = {};
	}

	render() {

		const className = this.props.className ? `${styles.content} ${this.props.className}` : styles.content;

		let statusBtn = undefined;
		let middleBtn = (<button><FontAwesomeIcon icon="plus" />Add</button>);

		if(this.props.showComplete) {
			statusBtn = (<button onClick={this.props.closeDialog}><FontAwesomeIcon icon="times" />Close</button>);
			middleBtn = (<button><FontAwesomeIcon icon="share-alt" />Share</button>);
		} else if(this.props.startTime) { 
			statusBtn = (<button onClick={this.props.stopRide}><FontAwesomeIcon icon="flag-checkered" />Stop</button>);
		} else {
			statusBtn = (<button onClick={this.props.startRide}><FontAwesomeIcon icon="check" />Start</button>);
		}


		return (
				<div className={styles.root}>
					<div className={styles.container}>
						<button>
							<FontAwesomeIcon icon="heart" />
							Save
						</button>
						{middleBtn}
						{statusBtn}
					</div>
				</div>
		);
	}

}

export default Footer;
