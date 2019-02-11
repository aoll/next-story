import React from 'react';
import PropTypes from 'prop-types';
import { RootRef as MaterialRootRef } from '@material-ui/core';

const RootRef = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialRootRef {...defaultProps}>
      {children}
    </MaterialRootRef>
  );
};

RootRef.propTypes = {
  
};

RootRef.defaultProps = {
  
};

export default RootRef;