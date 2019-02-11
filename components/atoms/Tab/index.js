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
   * If `true`, the tab will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   */
  fullWidth: PropTypes.bool,
  /**
   * @ignore
   */
  selected: PropTypes.bool,
  /**
   * @ignore
   */
  textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),
};

Tab.defaultProps = {
  disabled: false,
  textColor: 'inherit'
};

export default Tab;