import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore.js';

const Column = props => {
  const { title, cards, icon, addCard, creatorText } = props;
  
  return (
    <section className={styles.component}>
      <h3 className={styles.title}>{title} <span className={styles.icon}><Icon name={icon} /></span></h3>
      {cards.map(cardData => (
        <Card key={cardData.id} {...cardData} id={cardData.id} />
      ))}
      <div className={styles.creator}>
        <Creator text={creatorText} action={addCard} />
      </div>
    </section>
  );
};

Column.propTypes = {
  title: PropTypes.string,
  creatorText: PropTypes.string,
  icon: PropTypes.string,
  cards: PropTypes.array,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;
