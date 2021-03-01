import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Card = props => {
  const {title} = props;
  return (
    <div className={styles.component}>
      <h3>{ReactHtmlParser(title)}</h3>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;