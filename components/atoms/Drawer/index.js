import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as MaterialDrawer } from '@material-ui/core';

const Drawer = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialDrawer {...defaultProps}>
      {children}
    </MaterialDrawer>
  );
};

Drawer.propTypes = {
  /**
   * Side from which the drawer will appear.
   */
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  /**
   * The elevation of the drawer.
   */
  elevation: PropTypes.number,
  /**
   * If `true`, the drawer is open.
   */
  open: PropTypes.bool,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
};

Drawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  open: false,
  variant: 'temporary'
};

export default Drawer;