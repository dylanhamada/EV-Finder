import React, { Component } from 'react';

import styles from './SideDrawer.module.css';

import CloseButton from '../../components/UI/CloseButton/CloseButton';
import User from '../../components/User/User';

class SideDrawer extends Component {
    state = {
        userName: 'Dylan Hamada'
    }

    render() {
        let open = null;

        if (this.props.open) {
            open = (
                <nav className={styles.SideDrawer}>
                    <CloseButton />
                    <User userName={this.state.userName} />
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

        return (
            <React.Fragment>
                {open}
            </React.Fragment>
        );
    }
}

export default SideDrawer;