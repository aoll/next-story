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
  
};

ListItemSecondaryAction.defaultProps = {
  
};

export default ListItemSecondaryAction;