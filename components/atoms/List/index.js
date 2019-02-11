import React from 'react';
import PropTypes from 'prop-types';
import { List as MaterialList } from '@material-ui/core';

const List = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialList {...defaultProps}>
      {children}
    </MaterialList>
  );
};

List.propTypes = {
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items. The property is available to descendant components as the
   * `dense` context.
   */
  dense: PropTypes.bool,
  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: PropTypes.bool,
};

List.defaultProps = {
  dense: false,
  disablePadding: false
};

export default List;