
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { List } from '../..';

storiesOf('atoms/List', module)
  .add('default', () => (
    <List
      dense={boolean('dense', false)}
      disablePadding={boolean('disablePadding', false)}
    >
      {text('children', 'Test')}
    </List>
  ),
  {
    info: {

    },
  });
