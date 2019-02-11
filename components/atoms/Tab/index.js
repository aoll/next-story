import React from 'react';
import PropTypes from 'prop-types';
import { Tab as MaterialTab } from '@material-ui/core';

const Tab = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTab {...defaultProps}>
      {children}
    </MaterialTab>
  );
};

Tab.propTypes = {
  
    /**
    * This property isn't supported.
  * Use the `component` property if you need to change the children structure.
    */
    children: PropTypes.custom,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * If `true`, the tab will be disabled.
    */
    disabled: PropTypes.bool,
    
  
    /**
    * @ignore
    */
    fullWidth: PropTypes.bool,
    
  
    /**
    * The icon element.
    */
    icon: PropTypes.node,
    
  
    /**
    * @ignore
  * For server-side rendering consideration, we let the selected tab
  * render the indicator.
    */
    indicator: PropTypes.node,
    
  
    /**
    * The label element.
    */
    label: PropTypes.node,
    
  
    /**
    * @ignore
    */
    onChange: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onClick: PropTypes.func,
    
  
    /**
    * @ignore
    */
    selected: PropTypes.bool,
    
  
    /**
    * @ignore
    */
    textColor: PropTypes.oneOf(['secondary','primary','inherit']),
    
  
    /**
    * You can provide your own value. Otherwise, we fallback to the child position index.
    */
    value: PropTypes.any,
    
};

Tab.defaultProps = {
  disabled: false,
  textColor: 'inherit'
};

export default Tab;