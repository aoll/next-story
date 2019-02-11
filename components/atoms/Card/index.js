import React from 'react';
import PropTypes from 'prop-types';
import { Card as MaterialCard } from '@material-ui/core';

const Card = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialCard {...defaultProps}>
      {children}
    </MaterialCard>
  );
};

Card.propTypes = {
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * If `true`, the card will use raised styling.
    */
    raised: PropTypes.bool,
    
};

Card.defaultProps = {
  raised: false
};

export default Card;