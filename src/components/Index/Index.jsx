import React, { Component } from 'react';
import styles from './Index.scss';
import Map from '../../containers/CycleMapContainer';
import ModalFinishedRide from '../../containers/ModalFinishedRideContainer';

class Index extends Component {

  render() {
		return (
				<div className={styles.root}>
					<div className={styles.container}>
						<div className={styles.content}>
							<Map />
							<ModalFinishedRide />
						</div>
					</div>
				</div>
		);
  }

}

export default Index;
