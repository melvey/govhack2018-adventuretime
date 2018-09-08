import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import Header from '../../containers/HeaderContainer';
import Footer from '../Footer';
import styles from './App.scss';
import Index from '../Index';
import About from '../About';
import NotFound from '../NotFound';

class App extends Component {

	constructor(props) {
		super();

		this.props = props;
	}

	static propTypes = {
	};

	render() {
	const basePath = this.props.basePath || '/';

	return (
		<div>
			<Header />
			<div className={styles.appBody}>
				<Switch>
					<Route exact path={basePath} component={Index} />
					<Route path={`${basePath}about`} component={About} />
					<Route component={NotFound} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
	}

}

export default App;
