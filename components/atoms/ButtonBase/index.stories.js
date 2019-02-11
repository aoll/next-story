
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ButtonBase } from '../..';

storiesOf('atoms/ButtonBase', module)
  .add('default', () => (
    <ButtonBase
      centerRipple={boolean('centerRipple', false)}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
      disableTouchRipple={boolean('disableTouchRipple', false)}
      focusRipple={boolean('focusRipple', false)}
      focusVisibleClassName={text('focusVisibleClassName', undefined)}
      role={text('role', undefined)}
    >
      {text('children', 'Test')}
    </ButtonBase>
  ),
  {
    info: {

    },
  });
