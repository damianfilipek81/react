import React from 'react';
import styles from './App.scss';
import Creator from '../Creator/Creator.js';
import List from '../List/ListContainer.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Search from '../Search/SearchContainer.js';

class App extends React.Component {

  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
    addList: PropTypes.func,
  }

  render() {
    const { title, subtitle, lists, addList } = this.props;
    return (
      <main className={styles.component}>
        <div className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <div className={styles.component}>
            <Search/>
          </div>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </div>
        <div>
          <Creator text={settings.listCreatorText} action={addList} />
        </div>
      </main>
    );
  }
}

export default App;
