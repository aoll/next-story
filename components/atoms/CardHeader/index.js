import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader as MaterialCardHeader } from '@material-ui/core';

const CardHeader = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialCardHeader {...defaultProps}>
      {children}
    </MaterialCardHeader>
  );
};

CardHeader.propTypes = {
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `title` text, and optional `subheader` text
   * with the Typography component.
   */
  disableTypography: PropTypes.bool,
};

CardHeader.defaultProps = {
  disableTypography: false
};

export default CardHeader;