import React from 'react';
import PropTypes from 'prop-types';
import { ListItemAvatar as MaterialListItemAvatar } from '@material-ui/core';

const ListItemAvatar = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialListItemAvatar {...defaultProps}>
      {children}
    </MaterialListItemAvatar>
  );
};

ListItemAvatar.propTypes = {
  
    /**
    * The content of the component – normally `Avatar`.
    */
    children: PropTypes.element.isRequired,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
};

ListItemAvatar.defaultProps = {
  
};

export default ListItemAvatar;