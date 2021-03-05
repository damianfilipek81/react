import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Card = props => {
  const { title, id } = props;

  return (
    <div className={styles.component} id={id} >
      <h3>{ReactHtmlParser(title)}</h3>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};

export default Card;