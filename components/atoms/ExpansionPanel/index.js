import React from 'react';
import PropTypes from 'prop-types';
import { ExpansionPanel as MaterialExpansionPanel } from '@material-ui/core';

const ExpansionPanel = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialExpansionPanel {...defaultProps}>
      {children}
    </MaterialExpansionPanel>
  );
};

ExpansionPanel.propTypes = {
  /**
   * The content of the expansion panel.
   */
  children: PropTypes.node.isRequired,
  /**
   * If `true`, expands the panel by default.
   */
  defaultExpanded: PropTypes.bool,
  /**
   * If `true`, the panel will be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: PropTypes.bool,
  /**
   * @ignore
   */
  square: PropTypes.bool,
};

ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false,
  square: false
};

export default ExpansionPanel;