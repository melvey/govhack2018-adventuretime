import React, { Component } from 'react';
import styles from './Index.scss';
import Map from '../CycleMap';

class Index extends Component {

  render() {
		return (
				<div className={styles.root}>
					<div className={styles.container}>
						<div className={styles.heading}>
							<h2>Sample Page</h2>
						</div>
						<div className={styles.content}>
							<Map />
						</div>
					</div>
				</div>
		);
  }

}

export default Index;
