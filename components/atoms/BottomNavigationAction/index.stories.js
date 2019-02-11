
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { BottomNavigationAction } from '../..';

storiesOf('atoms/BottomNavigationAction', module)
  .add('default', () => (
    <BottomNavigationAction
      selected={boolean('selected', false)}
      showLabel={boolean('showLabel', false)}
    >
      {text('children', 'Test')}
    </BottomNavigationAction>
  ),
  {
    info: {

    },
  });
