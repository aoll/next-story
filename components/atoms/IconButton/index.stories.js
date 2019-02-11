
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { IconButton } from '../..';

storiesOf('atoms/IconButton', module)
  .add('default', () => (
    <IconButton
      color={select('color', ['default', 'inherit', 'primary', 'secondary'], 'default')}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
    >
      {text('children', 'Test')}
    </IconButton>
  ),
  {
    info: {

    },
  });
