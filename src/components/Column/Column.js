import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.string,
    creatorClass: PropTypes.string,
    creatorText: PropTypes.string,
    iconName: PropTypes.string,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title} <span className={styles.icon}><Icon name={this.props.iconName} /></span></h3>
        {this.state.cards.map(({ key, ...cardProps }) => (
          <Card key={key} {...cardProps} />
        ))}
        <div className={this.props.creatorClass}>
          <Creator text={this.props.creatorText} action={title => this.addCard(title)} />
        </div>
      </section>
    )
  }
}

export default Column;
