
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Divider } from '../..';

storiesOf('atoms/Divider', module)
  .add('default', () => (
    <Divider
      absolute={boolean('absolute', false)}
      inset={boolean('inset', false)}
      light={boolean('light', false)}
      variant={select('variant', ['fullWidth', 'inset', 'middle'], 'fullWidth')}
    >
      {text('children', 'Test')}
    </Divider>
  ),
  {
    info: {

    },
  });
