import React from 'react';
import PropTypes from 'prop-types';
import { CardActionArea as MaterialCardActionArea } from '@material-ui/core';

const CardActionArea = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialCardActionArea {...defaultProps}>
      {children}
    </MaterialCardActionArea>
  );
};

CardActionArea.propTypes = {
  
    /**
    * The content of the component.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * @ignore
    */
    focusVisibleClassName: PropTypes.string,
    
};

CardActionArea.defaultProps = {
  
};

export default CardActionArea;