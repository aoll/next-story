import React from 'react';
import PropTypes from 'prop-types';
import { Grow as MaterialGrow } from '@material-ui/core';

const Grow = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialGrow {...defaultProps}>
      {children}
    </MaterialGrow>
  );
};

Grow.propTypes = {
  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
};

Grow.defaultProps = {
  
};

export default Grow;