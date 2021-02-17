import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import Image from '../Hero/space.png';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world</h2>
        <List title={['Things to do', <sup key='1'>soon!</sup>]} image={Image}></List>
      </main>
    )
  }
}

export default App;
