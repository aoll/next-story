import React from 'react';
import PropTypes from 'prop-types';
import { ExpansionPanelDetails as MaterialExpansionPanelDetails } from '@material-ui/core';

const ExpansionPanelDetails = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialExpansionPanelDetails {...defaultProps}>
      {children}
    </MaterialExpansionPanelDetails>
  );
};

ExpansionPanelDetails.propTypes = {
  /**
   * The content of the expansion panel details.
   */
  children: PropTypes.node.isRequired,
};

ExpansionPanelDetails.defaultProps = {
  
};

export default ExpansionPanelDetails;