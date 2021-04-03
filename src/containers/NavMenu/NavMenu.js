import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './NavMenu.module.css';

import CloseButton from '../../components/UI/CloseButton/CloseButton';
import MenuToggle from '../../components/UI/MenuToggle/MenuToggle';
import User from '../../components/User/User';

class NavMenu extends Component {
    state = {
        userName: 'Dylan Hamada',
        menuOpen: false
    }

    toggleHandler = () => {
        this.setState((prevState) => ({
            menuOpen: !prevState.menuOpen
        }));
    }

    linkClickHandler = () => {
        this.setState({
            menuOpen: false
        });
    }

    render() {
        let menuClasses = [styles.NavMenu, styles.Close];
        if (this.state.menuOpen) {
            menuClasses = [styles.NavMenu, styles.Open];
        }

        return (
            <React.Fragment>
                <MenuToggle menuToggle={this.toggleHandler} />
                <nav className={menuClasses.join(' ')}>
                    <CloseButton menuToggle={this.toggleHandler} />
                    <User userName={this.state.userName} />
                    <ul className={styles.NavList}>
                        <Link className={styles.Link} to="/find">
                            <li className={styles.NavListItem} onClick={this.linkClickHandler}>Find</li>
                        </Link>
                        <li className={styles.NavListItem}>Browse</li>
                        <li className={styles.NavListItem}>Compare</li>
                        <li className={styles.NavListItem}>Favorites</li>
                        <li className={styles.NavListItem}>Log Out</li>
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavMenu;