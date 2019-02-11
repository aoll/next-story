
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ListItemSecondaryAction } from '../..';

storiesOf('atoms/ListItemSecondaryAction', module)
  .add('default', () => (
    <ListItemSecondaryAction
      className={text('className', undefined)}
    >
      {text('children', 'Test')}
    </ListItemSecondaryAction>
  ),
  {
    info: {

    },
  })
