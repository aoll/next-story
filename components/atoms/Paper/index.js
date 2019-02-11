import React from 'react';
import PropTypes from 'prop-types';
import { Paper as MaterialPaper } from '@material-ui/core';

const Paper = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialPaper {...defaultProps}>
      {children}
    </MaterialPaper>
  );
};

Paper.propTypes = {
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It's accepting values between 0 and 24 inclusive.
   */
  elevation: PropTypes.number,
  /**
   * If `true`, rounded corners are disabled.
   */
  square: PropTypes.bool,
};

Paper.defaultProps = {
  elevation: 2,
  square: false
};

export default Paper;