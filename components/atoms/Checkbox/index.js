import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as MaterialCheckbox } from '@material-ui/core';

const Checkbox = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialCheckbox {...defaultProps}>
      {children}
    </MaterialCheckbox>
  );
};

Checkbox.propTypes = {
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
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the input.
   */
  indeterminate: PropTypes.bool,
};

Checkbox.defaultProps = {
  color: 'secondary',
  indeterminate: false
};

export default Checkbox;