import React from 'react';
import PropTypes from 'prop-types';
import { ListItemSecondaryAction as MaterialListItemSecondaryAction } from '@material-ui/core';

const ListItemSecondaryAction = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialListItemSecondaryAction {...defaultProps}>
      {children}
    </MaterialListItemSecondaryAction>
  );
};

ListItemSecondaryAction.propTypes = {
  
    /**
    * The content of the component, normally an `IconButton` or selection control.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
};

ListItemSecondaryAction.defaultProps = {
  
};

export default ListItemSecondaryAction;