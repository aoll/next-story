import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color }) => <div>{color}</div>;

Button.propTypes = {
  color: PropTypes.default.oneOf(['default', 'inherit', 'primary', 'secondary']),
};

const btn = Button;

export default btn;
