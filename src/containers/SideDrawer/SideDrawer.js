import React, { Component } from 'react';

import styles from './SideDrawer.module.css';

import CloseButton from '../../components/UI/CloseButton/CloseButton';

class SideDrawer extends Component {
    render() {
        return (
            <nav className={styles.SideDrawer}>
                <CloseButton />
                <ul>
                    <li>Find</li>
                    <li>Browse</li>
                    <li>Compare</li>
                    <li>Favorites</li>
                    <li>Log Out</li>
                </ul>
            </nav>
        );
    }
}

export default SideDrawer;