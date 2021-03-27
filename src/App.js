import React, { Component } from 'react';

import styles from './App.module.css';
import NavMenu from './containers/NavMenu/NavMenu';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <NavMenu />
      </div>
    );
  }
}

export default App;
