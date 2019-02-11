
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ButtonBase } from '../..';

storiesOf('atoms/ButtonBase', module)
  .add('default', () => (
    <ButtonBase
      action={text('action', undefined)}
      buttonRef={text('buttonRef', undefined)}
      centerRipple={boolean('centerRipple', false)}
      className={text('className', undefined)}
      disabled={boolean('disabled', undefined)}
      disableRipple={boolean('disableRipple', false)}
      disableTouchRipple={boolean('disableTouchRipple', false)}
      focusRipple={boolean('focusRipple', false)}
      focusVisibleClassName={text('focusVisibleClassName', undefined)}
      onBlur={text('onBlur', undefined)}
      onClick={text('onClick', undefined)}
      onFocus={text('onFocus', undefined)}
      onFocusVisible={text('onFocusVisible', undefined)}
      onKeyDown={text('onKeyDown', undefined)}
      onKeyUp={text('onKeyUp', undefined)}
      onMouseDown={text('onMouseDown', undefined)}
      onMouseLeave={text('onMouseLeave', undefined)}
      onMouseUp={text('onMouseUp', undefined)}
      onTouchEnd={text('onTouchEnd', undefined)}
      onTouchMove={text('onTouchMove', undefined)}
      onTouchStart={text('onTouchStart', undefined)}
      role={text('role', undefined)}
      tabIndex={text('tabIndex', '0')}
      TouchRippleProps={text('TouchRippleProps', undefined)}
      type={text('type', 'button')}
    >
      {text('children', 'Test')}
    </ButtonBase>
  ),
  {
    info: {

    },
  })
