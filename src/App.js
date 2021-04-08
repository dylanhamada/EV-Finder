import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styles from './App.module.css';
import NavMenu from './containers/NavMenu/NavMenu';
import Dashboard from './containers/Dashboard/Dashboard';
import Find from './containers/Find/Find';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                    <div className={styles.App}>
                        <NavMenu />
                        <Switch>
                            <Route path='/' exact component={Dashboard} />
                            <Route path='/find' component={Find} />
                        </Switch>
                    </div>
            </BrowserRouter>
        );
    } 
}

export default App;