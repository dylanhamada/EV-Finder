import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from './Find.module.css';
import Intro from '../../components/Find/Intro';
import Criteria from './Criteria/Criteria';

class Find extends Component {
    render() {
        return (
            <div className={styles.Find}>
                <Switch>
                    <Route path={this.props.match.url + '/'} exact component={Intro} />
                    <Route path={this.props.match.url + '/criteria'} component={Criteria} />
                </Switch>
            </div>
        );
    }
}

export default Find;