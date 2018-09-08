import React, { Component } from 'react';
import styles from './Index.scss';
import Map from '../CycleMap';

class Index extends Component {

  render() {
		return (
				<div className={styles.root}>
					<div className={styles.container}>
						<div className={styles.content}>
							<Map />
						</div>
					</div>
				</div>
		);
  }

}

export default Index;
