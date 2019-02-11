import React from 'react';
import PropTypes from 'prop-types';
import { Switch as MaterialSwitch } from '@material-ui/core';

const Switch = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialSwitch {...defaultProps}>
      {children}
    </MaterialSwitch>
  );
};

Switch.propTypes = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  /**
   * @ignore
   */
  defaultChecked: PropTypes.bool,
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

Switch.defaultProps = {
  color: 'secondary'
};

export default Switch;