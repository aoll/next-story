import React from 'react';
import PropTypes from 'prop-types';
import { Collapse as MaterialCollapse } from '@material-ui/core';

const Collapse = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialCollapse {...defaultProps}>
      {children}
    </MaterialCollapse>
  );
};

Collapse.propTypes = {
  
    /**
    * The content node to be collapsed.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The height of the container when collapsed.
    */
    collapsedHeight: PropTypes.string,
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
    */
    component: PropTypes.element,
    
  
    /**
    * If `true`, the component will transition in.
    */
    in: PropTypes.bool,
    
  
    /**
    * @ignore
    */
    onEnter: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onEntered: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onEntering: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onExit: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onExiting: PropTypes.func,
    
  
    /**
    * @ignore
    */
    style: PropTypes.object,
    
  
    /**
    * @ignore
    */
    theme: PropTypes.object.isRequired,
    
  
    /**
    * The duration for the transition, in milliseconds.
  * You may specify a single timeout for all transitions, or individually with an object.
  * 
  * Set to 'auto' to automatically calculate transition time based on height.
    */
    timeout: PropTypes.union,
    
};

Collapse.defaultProps = {
  collapsedHeight: '0px'
};

export default Collapse;