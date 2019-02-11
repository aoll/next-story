import React from 'react';
import PropTypes from 'prop-types';
import { ExpansionPanelSummary as MaterialExpansionPanelSummary } from '@material-ui/core';

const ExpansionPanelSummary = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialExpansionPanelSummary {...defaultProps}>
      {children}
    </MaterialExpansionPanelSummary>
  );
};

ExpansionPanelSummary.propTypes = {
  
    /**
    * The content of the expansion panel summary.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * @ignore
  * If `true`, the summary will be displayed in a disabled state.
    */
    disabled: PropTypes.bool,
    
  
    /**
    * @ignore
  * If `true`, expands the summary, otherwise collapse it.
    */
    expanded: PropTypes.bool,
    
  
    /**
    * The icon to display as the expand indicator.
    */
    expandIcon: PropTypes.node,
    
  
    /**
    * Properties applied to the `TouchRipple` element wrapping the expand icon.
    */
    IconButtonProps: PropTypes.object,
    
  
    /**
    * @ignore
    */
    onBlur: PropTypes.func,
    
  
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
    onFocusVisible: PropTypes.func,
    
};

ExpansionPanelSummary.defaultProps = {
  disabled: false
};

export default ExpansionPanelSummary;