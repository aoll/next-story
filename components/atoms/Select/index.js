import React from 'react';
import PropTypes from 'prop-types';
import { Select as MaterialSelect } from '@material-ui/core';

const Select = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialSelect {...defaultProps}>
      {children}
    </MaterialSelect>
  );
};

Select.propTypes = {
  /**
   * If true, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: PropTypes.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   * You can only use it when the `native` property is `false` (default).
   */
  displayEmpty: PropTypes.bool,
  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   */
  multiple: PropTypes.bool,
  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: PropTypes.bool,
  /**
   * Control `select` open state.
   * You can only use it when the `native` property is `false` (default).
   */
  open: PropTypes.bool,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

Select.defaultProps = {
  autoWidth: false,
  displayEmpty: false,
  multiple: false,
  native: false
};

export default Select;