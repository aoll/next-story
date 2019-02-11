import React from 'react';
import PropTypes from 'prop-types';
import { Portal as MaterialPortal } from '@material-ui/core';

const Portal = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialPortal {...defaultProps}>
      {children}
    </MaterialPortal>
  );
};

Portal.propTypes = {

    /**
    *
    */

};

Portal.defaultProps = {
  disablePortal: false
};

export default Portal;
