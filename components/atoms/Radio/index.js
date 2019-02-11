import React from 'react';
import PropTypes from 'prop-types';
import { Radio as MaterialRadio } from '@material-ui/core';

const Radio = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialRadio {...defaultProps}>
      {children}
    </MaterialRadio>
  );
};

Radio.propTypes = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
};

Radio.defaultProps = {
  color: 'secondary'
};

export default Radio;