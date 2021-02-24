import React from 'react';
import styles from './App.scss';
import Creator from '../Creator/Creator.js';
import List from '../List/List.js';
import PropTypes from 'prop-types';
import { pageContents, listData, settings } from '../../data/dataStore';

class App extends React.Component {
  state = {
    list: this.props.listData || [],
  }

  static propTypes = {
    listData: PropTypes.array,
  }
  addList(title) {
    this.setState(state => (
      {
        list: [
          ...state.list,
          {
            key: state.list.length ? state.list[state.list.length - 1].key + 1 : 0,
            title,
            image: listData.image,
            columns: [],
          },
        ],
      }
    ));
  }

  render() {
    return (
      <main className={styles.component}>
        <div className={styles.component}>
          <h1 className={styles.title}>{pageContents.title}</h1>
          <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
          <List {...listData} />
        </div>
        <div className={styles.component}>
          {this.state.list.map(({ key, ...listProps }) => (
            <List key={key} {...listProps} />
          ))}
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div>
      </main>
    );
  }
}

export default App;
