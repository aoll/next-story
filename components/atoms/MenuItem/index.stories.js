
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { MenuItem } from '../..';

storiesOf('atoms/MenuItem', module)
  .add('default', () => (
    <MenuItem
      className={text('className', undefined)}
      disableGutters={boolean('disableGutters', false)}
      role={text('role', 'menuitem')}
      selected={boolean('selected', undefined)}
    >
      {text('children', 'Test')}
    </MenuItem>
  ),
  {
    info: {

    },
  })
