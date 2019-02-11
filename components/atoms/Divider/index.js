import React from 'react';
import PropTypes from 'prop-types';
import { Divider as MaterialDivider } from '@material-ui/core';

const Divider = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialDivider {...defaultProps}>
      {children}
    </MaterialDivider>
  );
};

Divider.propTypes = {
  /**
   * Absolutely position the element.
   */
  absolute: PropTypes.bool,
  /**
   * If `true`, the divider will be indented.
   * __WARNING__: `inset` is deprecated.
   * Instead use `variant="inset"`.
   */
  inset: PropTypes.bool,
  /**
   * If `true`, the divider will have a lighter color.
   */
  light: PropTypes.bool,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['fullWidth', 'inset', 'middle']),
};

Divider.defaultProps = {
  absolute: false,
  light: false,
  variant: 'fullWidth'
};

export default Divider;