import React from 'react';

import styles from './CloseButton.module.css';
import close from '../../../assets/images/close-overlay-button.svg';

const CloseButton = props => {
    return (
        <React.Fragment>
            <img src={close} alt="Close" />
        </React.Fragment>
    );
};

export default CloseButton;