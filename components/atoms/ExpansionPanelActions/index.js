import React from 'react';
import PropTypes from 'prop-types';
import { ExpansionPanelActions as MaterialExpansionPanelActions } from '@material-ui/core';

const ExpansionPanelActions = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialExpansionPanelActions {...defaultProps}>
      {children}
    </MaterialExpansionPanelActions>
  );
};

ExpansionPanelActions.propTypes = {
  
    /**
    * The content of the component.
    */
    children: PropTypes.node.isRequired,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
};

ExpansionPanelActions.defaultProps = {
  
};

export default ExpansionPanelActions;