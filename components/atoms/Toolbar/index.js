import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar as MaterialToolbar } from '@material-ui/core';

const Toolbar = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialToolbar {...defaultProps}>
      {children}
    </MaterialToolbar>
  );
};

Toolbar.propTypes = {
  
    /**
    * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * If `true`, disables gutter padding.
    */
    disableGutters: PropTypes.bool,
    
  
    /**
    * The variant to use.
    */
    variant: PropTypes.oneOf(['regular','dense']),
    
};

Toolbar.defaultProps = {
  disableGutters: false,
  variant: 'regular'
};

export default Toolbar;