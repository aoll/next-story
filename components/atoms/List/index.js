import React from 'react';
import PropTypes from 'prop-types';
import { List as MaterialList } from '@material-ui/core';

const List = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialList {...defaultProps}>
      {children}
    </MaterialList>
  );
};

List.propTypes = {
  
    /**
    * The content of the component.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
    */
    component: PropTypes.element,
    
  
    /**
    * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
  * the list and list items. The property is available to descendant components as the
  * `dense` context.
    */
    dense: PropTypes.bool,
    
  
    /**
    * If `true`, vertical padding will be removed from the list.
    */
    disablePadding: PropTypes.bool,
    
  
    /**
    * The content of the subheader, normally `ListSubheader`.
    */
    subheader: PropTypes.node,
    
};

List.defaultProps = {
  dense: false,
  disablePadding: false
};

export default List;