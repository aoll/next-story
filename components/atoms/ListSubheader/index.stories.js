
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ListSubheader } from '../..';

storiesOf('atoms/ListSubheader', module)
  .add('default', () => (
    <ListSubheader
      color={select('color', ['default', 'primary', 'inherit'], 'default')}
      disableGutters={boolean('disableGutters', false)}
      disableSticky={boolean('disableSticky', false)}
      inset={boolean('inset', false)}
    >
      {text('children', 'Test')}
    </ListSubheader>
  ),
  {
    info: {

    },
  });
