import React from 'react';
import PropTypes from 'prop-types';
import { Icon as MaterialIcon } from '@material-ui/core';

const Icon = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialIcon {...defaultProps}>
      {children}
    </MaterialIcon>
  );
};

Icon.propTypes = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: PropTypes.oneOf(['inherit', 'default', 'small', 'large']),
};

Icon.defaultProps = {
  color: 'inherit',
  fontSize: 'default'
};

export default Icon;