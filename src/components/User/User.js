import React from 'react';

import styles from './User.module.css';
import userPhoto from '../../assets/images/bolshevik_profile.jpg';

const User = props => {
    let userName = props.userName ? props.userName : "Driver"

    return(
        <div className={styles.User}>
            <img alt="User" className={styles.Photo} src={userPhoto} />
            <p className={styles.Paragraph}>Hello, {userName}.</p>
        </div>
    );
};

export default User;