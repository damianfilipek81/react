import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    creatorClass: PropTypes.string,
    creatorText: PropTypes.string,
    iconName: PropTypes.string,
    cards: PropTypes.array,
  }

  render() {
    const { title, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title} <span className={styles.icon}><Icon name={this.props.iconName} /></span></h3>
        {cards.map( cardData  => (
          <Card key={cardData.id} {...cardData} />
        ))}
        {/*<div className={this.props.creatorClass}>
          <Creator text={this.props.creatorText} action={title => this.addCard(title)} />
        </div>*/}
      </section>
    );
  }
}

export default Column;
