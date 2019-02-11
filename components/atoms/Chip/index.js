import React from 'react';
import PropTypes from 'prop-types';
import { Chip as MaterialChip } from '@material-ui/core';

const Chip = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialChip {...defaultProps}>
      {children}
    </MaterialChip>
  );
};

Chip.propTypes = {
  /**
   * If true, the chip will appear clickable, and will raise when pressed,
   * even if the onClick property is not defined.
   * If false, the chip will not be clickable, even if onClick property is defined.
   * This can be used, for example,
   * along with the component property to indicate an anchor Chip is clickable.
   */
  clickable: PropTypes.bool,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['default', 'outlined']),
};

Chip.defaultProps = {
  color: 'default',
  variant: 'default'
};

export default Chip;