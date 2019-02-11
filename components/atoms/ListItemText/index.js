import React from 'react';
import PropTypes from 'prop-types';
import { ListItemText as MaterialListItemText } from '@material-ui/core';

const ListItemText = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialListItemText {...defaultProps}>
      {children}
    </MaterialListItemText>
  );
};

ListItemText.propTypes = {
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   */
  disableTypography: PropTypes.bool,
  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: PropTypes.bool,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
};

ListItemText.defaultProps = {
  disableTypography: false,
  inset: false
};

export default ListItemText;