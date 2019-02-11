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
   * The height of the container when collapsed.
   */
  collapsedHeight: PropTypes.string,
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
};

Collapse.defaultProps = {
  collapsedHeight: '0px'
};

export default Collapse;