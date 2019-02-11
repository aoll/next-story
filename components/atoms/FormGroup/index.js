import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup as MaterialFormGroup } from '@material-ui/core';

const FormGroup = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialFormGroup {...defaultProps}>
      {children}
    </MaterialFormGroup>
  );
};

FormGroup.propTypes = {
  
    /**
    * The content of the component.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * Display group of elements in a compact row.
    */
    row: PropTypes.bool,
    
};

FormGroup.defaultProps = {
  row: false
};

export default FormGroup;