import React from 'react';
import PropTypes from 'prop-types';
import { CardContent as MaterialCardContent } from '@material-ui/core';

const CardContent = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialCardContent {...defaultProps}>
      {children}
    </MaterialCardContent>
  );
};

CardContent.propTypes = {
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
    */
    component: PropTypes.element,
    
};

CardContent.defaultProps = {
  
};

export default CardContent;