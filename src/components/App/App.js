import React from 'react';
import styles from './App.scss';
//import Creator from '../Creator/Creator.js';
import List from '../List/ListContainer.js';
import PropTypes from 'prop-types';
//import { listData, settings } from '../../data/dataStore';
import Search from '../Search/SearchContainer.js';

class App extends React.Component {
  state = {
    lists: this.lists || [],
  }

  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
  }

  addList(title) {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length - 1].key + 1 : 0,
            title,
            image: state.lists.image,
            columns: [],
          },
        ],
      }
    ));
  }

  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <main className={styles.component}>
        <div className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <Search />
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </div>
        {/*<div className={styles.component}>
          {this.state.lists.map(({ ...listProps }) => (
            <List key={listData.id} {...listProps} />
          ))}
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
          </div>*/}
      </main>
    );
  }
}

export default App;
