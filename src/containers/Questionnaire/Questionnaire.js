import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from './Questionnaire.module.css';
import Intro from '../../components/Questionnaire/Intro';

class Questionnaire extends Component {
    render() {
        return (
            <div className={styles.Questionnaire}>
                <Switch>
                    <Route path={this.props.match.url + '/'} component={Intro} />
                </Switch>
            </div>
        );
    }
}

export default Questionnaire;