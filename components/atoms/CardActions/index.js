import React from 'react';
import PropTypes from 'prop-types';
import { CardActions as MaterialCardActions } from '@material-ui/core';

const CardActions = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialCardActions {...defaultProps}>
      {children}
    </MaterialCardActions>
  );
};

CardActions.propTypes = {
  /**
   * If `true`, the card actions do not have additional margin.
   */
  disableActionSpacing: PropTypes.bool,
};

CardActions.defaultProps = {
  disableActionSpacing: false
};

export default CardActions;