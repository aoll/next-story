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
   * @ignore
   * If `true`, the summary will be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   * If `true`, expands the summary, otherwise collapse it.
   */
  expanded: PropTypes.bool,
};

ExpansionPanelSummary.defaultProps = {
  disabled: false
};

export default ExpansionPanelSummary;