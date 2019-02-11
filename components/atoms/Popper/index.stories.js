
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Popper } from '../..';

storiesOf('atoms/Popper', module)
  .add('default', () => (
    <Popper
      disablePortal={boolean('disablePortal', false)}
      keepMounted={boolean('keepMounted', false)}
      open={boolean('open', false)}
      placement={select('placement', ['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top'], 'bottom')}
      transition={boolean('transition', false)}
    >
      {text('children', 'Test')}
    </Popper>
  ),
  {
    info: {

    },
  });
