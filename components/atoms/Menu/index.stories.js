
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Menu } from '../..';

storiesOf('atoms/Menu', module)
  .add('default', () => (
    <Menu
      disableAutoFocusItem={boolean('disableAutoFocusItem', false)}
      open={boolean('open', false)}
      theme={text('theme', undefined)}
    >
      {text('children', 'Test')}
    </Menu>
  ),
  {
    info: {

    },
  });
