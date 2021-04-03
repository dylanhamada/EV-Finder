import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Intro.module.css';

const Intro = (props) => {
    return (
        <React.Fragment>
            <p className={styles.Text}>Answer a few simple questions and get matched to an electric vehicle that meets your needs. The whole process should take less than five minutes.</p>
            <Link className={styles.Link} to={props.match.url + '/criteria'}>Get started</Link>
        </React.Fragment>
    );
};

export default Intro;