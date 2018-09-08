import React, {Component} from 'react';
import styles from './Header.scss';
import {Link} from 'react-router-dom';
import logo from './logo.png';

class Header extends Component {
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
    e.target.classList.toggle("change");
  }

  render() {
		return (
				<div className={styles.root}>
					<div className={styles.container}>
            <div className={styles.hamburger} onClick={this.toggleMenu}>
              <div className={styles.bar1}></div>
              <div className={styles.bar2}></div>
              <div className={styles.bar3}></div>
            </div>
						<div className={styles.banner}>
							<h1 className={styles.bannerTitle}>React</h1>
							<p className={styles.bannerDesc}>Complex web apps made easy</p>
						</div>
					</div>
				</div>
		);
  }

}

export default Header;
