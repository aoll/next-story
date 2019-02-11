
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Backdrop } from '../..';

storiesOf('atoms/Backdrop', module)
  .add('default', () => (
    <Backdrop
      invisible={boolean('invisible', false)}
      open={boolean('open', false)}
    >
      {text('children', 'Test')}
    </Backdrop>
  ),
  {
    info: {

    },
  });
