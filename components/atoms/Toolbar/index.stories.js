
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Toolbar } from '../..';

storiesOf('atoms/Toolbar', module)
  .add('default', () => (
    <Toolbar
      disableGutters={boolean('disableGutters', false)}
      variant={select('variant', ['regular', 'dense'], 'regular')}
    >
      {text('children', 'Test')}
    </Toolbar>
  ),
  {
    info: {

    },
  });
