import React from 'react';
import PropTypes from 'prop-types';
import { ListSubheader as MaterialListSubheader } from '@material-ui/core';

const ListSubheader = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialListSubheader {...defaultProps}>
      {children}
    </MaterialListSubheader>
  );
};

ListSubheader.propTypes = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'inherit']),
  /**
   * If `true`, the List Subheader will not have gutters.
   */
  disableGutters: PropTypes.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   */
  disableSticky: PropTypes.bool,
  /**
   * If `true`, the List Subheader will be indented.
   */
  inset: PropTypes.bool,
};

ListSubheader.defaultProps = {
  color: 'default',
  disableGutters: false,
  disableSticky: false,
  inset: false
};

export default ListSubheader;