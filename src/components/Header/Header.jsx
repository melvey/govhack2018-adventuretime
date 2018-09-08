import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import Menu from '../Menu';

class Header extends Component {
	static propTypes = {
		menuOpen: PropTypes.bool,
		menuFunc: PropTypes.func
	};

  constructor(props) {
    super(props);
    this.state = {
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentDidMount() {
  }
  toggleMenu(e) {
    console.log(e.target);
    //e.target.classList.toggle(styles.change);
		this.props.menuFunc();
  }

  render() {
		const active = this.props.menuOpen;
		console.log(this.props);

		return (
				<div className={styles.root}>
					<div className={styles.container}>
            <div className={`${styles.hamburger} ${active ? styles.change : ''}`} onClick={this.toggleMenu}>
              <div className={styles.bar1}></div>
              <div className={styles.bar2}></div>
              <div className={styles.bar3}></div>
            </div>
						<div className={styles.banner}>
							<h1 className={styles.bannerTitle}>React</h1>
							{active ? <Menu /> : null}
						</div>
					</div>
				</div>
		);
  }

}

export default Header;
