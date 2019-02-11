
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { BottomNavigation } from '../..';

storiesOf('atoms/BottomNavigation', module)
  .add('default', () => (
    <BottomNavigation
      showLabels={boolean('showLabels', false)}
    >
      {text('children', 'Test')}
    </BottomNavigation>
  ),
  {
    info: {

    },
  });
