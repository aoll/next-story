import React from 'react';
import PropTypes from 'prop-types';
import { ListItemIcon as MaterialListItemIcon } from '@material-ui/core';

const ListItemIcon = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialListItemIcon {...defaultProps}>
      {children}
    </MaterialListItemIcon>
  );
};

ListItemIcon.propTypes = {
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@material-ui/icons` SVG icon element.
   */
  children: PropTypes.element.isRequired,
};

ListItemIcon.defaultProps = {
  
};

export default ListItemIcon;