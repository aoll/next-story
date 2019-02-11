
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { List } from '../..';

storiesOf('atoms/List', module)
  .add('default', () => (
    <List
      className={text('className', undefined)}
      dense={boolean('dense', false)}
      disablePadding={boolean('disablePadding', false)}
      subheader={text('subheader', undefined)}
    >
      {text('children', 'Test')}
    </List>
  ),
  {
    info: {

    },
  })
