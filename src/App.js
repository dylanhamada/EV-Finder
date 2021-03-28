import React, { Component } from 'react';

import styles from './App.module.css';
import NavMenu from './containers/NavMenu/NavMenu';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <NavMenu />
        <Dashboard />
      </div>
    );
  }
}

export default App;
