
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ListItemAvatar } from '../..';

storiesOf('atoms/ListItemAvatar', module)
  .add('default', () => (
    <ListItemAvatar
      
    >
      {text('children', 'Test')}
    </ListItemAvatar>
  ),
  {
    info: {

    },
  });
