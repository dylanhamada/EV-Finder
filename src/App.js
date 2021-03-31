import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styles from './App.module.css';
import NavMenu from './containers/NavMenu/NavMenu';
import Dashboard from './containers/Dashboard/Dashboard';
import Questionnaire from './containers/Questionnaire/Questionnaire';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={styles.App}>
                    <NavMenu />
                    <Switch>
                        <Route path='/' exact component={Dashboard} />
                        <Route path='/questionnaire' component={Questionnaire} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    } 
}

export default App;