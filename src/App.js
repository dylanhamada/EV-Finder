import React, { Component } from 'react';

import styles from './App.module.css';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Layout />
      </div>
    );
  }
}

export default App;
