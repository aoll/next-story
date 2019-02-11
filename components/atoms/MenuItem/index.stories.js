
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { MenuItem } from '../..';

storiesOf('atoms/MenuItem', module)
  .add('default', () => (
    <MenuItem
      disableGutters={boolean('disableGutters', false)}
      role={text('role', 'menuitem')}
      selected={boolean('selected', false)}
    >
      {text('children', 'Test')}
    </MenuItem>
  ),
  {
    info: {

    },
  });
