import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress as MaterialLinearProgress } from '@material-ui/core';

const LinearProgress = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialLinearProgress {...defaultProps}>
      {children}
    </MaterialLinearProgress>
  );
};

LinearProgress.propTypes = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: PropTypes.number,
  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   */
  variant: PropTypes.oneOf(['determinate', 'indeterminate', 'buffer', 'query']),
};

LinearProgress.defaultProps = {
  color: 'primary',
  variant: 'indeterminate'
};

export default LinearProgress;