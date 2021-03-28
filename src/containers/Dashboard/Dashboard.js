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
                <ul>
                    <li>
                        <h3>FIND</h3>
                        <p>Complete a questionnaire and get matched to an electric vehicle.</p>
                    </li>
                    <li>
                        <h3>Browse</h3>
                        <p>Browse all of 2020's electric vehicles.</p>
                    </li>
                    <li>
                        <h3>Compare</h3>
                        <p>Compare two electric vehicles head to head.</p>
                    </li>
                    <li>
                        <h3>Favorites</h3>
                        <p>View a list of your favorites.</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Dashboard;