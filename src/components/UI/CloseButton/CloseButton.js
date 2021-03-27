import React from 'react';

import styles from './CloseButton.module.css';

const CloseButton = props => {
    return (
        <div className={styles.Close} onClick={props.menuToggle} title="Close Button" />
    );
};

export default CloseButton;