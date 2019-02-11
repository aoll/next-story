import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as MaterialTabs } from '@material-ui/core';

const Tabs = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTabs {...defaultProps}>
      {children}
    </MaterialTabs>
  );
};

Tabs.propTypes = {
  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: PropTypes.bool,
  /**
   * Determines the color of the indicator.
   */
  indicatorColor: PropTypes.oneOf(['secondary', 'primary']),
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll
   * `auto` will only present them on medium and larger viewports
   * `on` will always present them
   * `off` will never present them
   */
  scrollButtons: PropTypes.oneOf(['auto', 'on', 'off']),
  /**
   * Determines the color of the `Tab`.
   */
  textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
  /**
   * Determines additional display behavior of the tabs:
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  -`fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   */
  variant: PropTypes.oneOf(['standard', 'scrollable', 'fullWidth']),
};

Tabs.defaultProps = {
  centered: false,
  indicatorColor: 'secondary',
  scrollButtons: 'auto',
  textColor: 'inherit',
  variant: 'standard'
};

export default Tabs;