import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress as MaterialCircularProgress } from '@material-ui/core';

const CircularProgress = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialCircularProgress {...defaultProps}>
      {children}
    </MaterialCircularProgress>
  );
};

CircularProgress.propTypes = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'inherit']),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   */
  disableShrink: PropTypes.bool,
  /**
   * The thickness of the circle.
   */
  thickness: PropTypes.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   */
  variant: PropTypes.oneOf(['determinate', 'indeterminate', 'static']),
};

CircularProgress.defaultProps = {
  color: 'primary',
  disableShrink: false,
  thickness: 3.6,
  variant: 'indeterminate'
};

export default CircularProgress;