
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ListItemIcon } from '../..';

storiesOf('atoms/ListItemIcon', module)
  .add('default', () => (
    <ListItemIcon
      className={text('className', undefined)}
    >
      {text('children', 'Test')}
    </ListItemIcon>
  ),
  {
    info: {

    },
  })
