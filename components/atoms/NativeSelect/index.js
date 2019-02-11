import React from 'react';
import PropTypes from 'prop-types';
import { NativeSelect as MaterialNativeSelect } from '@material-ui/core';

const NativeSelect = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialNativeSelect {...defaultProps}>
      {children}
    </MaterialNativeSelect>
  );
};

NativeSelect.propTypes = {
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

NativeSelect.defaultProps = {
  
};

export default NativeSelect;