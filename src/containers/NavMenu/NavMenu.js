import React, { Component } from 'react';

import styles from './NavMenu.module.css';

import CloseButton from '../../components/UI/CloseButton/CloseButton';
import MenuToggle from '../../components/UI/MenuToggle/MenuToggle';
import User from '../../components/User/User';

class NavMenu extends Component {
    state = {
        userName: 'Dylan Hamada',
        menuOpen: true
    }

    toggleHandler = () => {
        this.setState((prevState) => ({
            menuOpen: !prevState.menuOpen
        }));
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
                        <li className={styles.NavListItem}>Find</li>
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