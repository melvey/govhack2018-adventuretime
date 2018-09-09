import React, { Component } from 'react';
import styles from './Index.scss';
import Map from '../../containers/CycleMapContainer';
import ModalFinishedRide from '../../components/ModalFinishedRide';

class Index extends Component {

  render() {
		return (
				<div className={styles.root}>
					<div className={styles.container}>
						<div className={styles.content}>
							<Map />
              { this.state && this.state.finishedRide &&
                <ModalFinishedRide />
              }
						</div>
					</div>
				</div>
		);
  }

}

export default Index;
