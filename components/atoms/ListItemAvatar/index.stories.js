
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ListItemAvatar } from '../..';

storiesOf('atoms/ListItemAvatar', module)
  .add('default', () => (
    <ListItemAvatar
      className={text('className', undefined)}
    >
      {text('children', 'Test')}
    </ListItemAvatar>
  ),
  {
    info: {

    },
  })
