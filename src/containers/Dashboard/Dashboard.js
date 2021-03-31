import React, { Component } from 'react';

import styles from './Dashboard.module.css';
import User from '../../components/User/User';

class Dashboard extends Component {
    state = {
        userName: 'Dylan Hamada'
    }

    render() {
        return (
            <div className={styles.Dashboard}>
                <User userName={this.state.userName} />
                <ul className={styles.NavList}>
                    <li className={styles.NavListItem}>
                        <h3 className={styles.NavListItemLink}>FIND</h3>
                        <p className={styles.NavListItemDescription}>Complete a questionnaire and get matched to an electric vehicle.</p>
                    </li>
                    <li className={styles.NavListItem}>
                        <h3 className={styles.NavListItemLink}>Browse</h3>
                        <p className={styles.NavListItemDescription}>Browse all of 2020's electric vehicles.</p>
                    </li>
                    <li className={styles.NavListItem}>
                        <h3 className={styles.NavListItemLink}>Compare</h3>
                        <p className={styles.NavListItemDescription}>Compare two electric vehicles head to head.</p>
                    </li>
                    <li className={styles.NavListItem}>
                        <h3 className={styles.NavListItemLink}>Favorites</h3>
                        <p className={styles.NavListItemDescription}>View a list of your favorites.</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Dashboard;