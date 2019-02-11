
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Backdrop } from '../..';

storiesOf('atoms/Backdrop', module)
  .add('default', () => (
    <Backdrop
      className={text('className', undefined)}
      invisible={boolean('invisible', false)}
      open={boolean('open', undefined)}
      transitionDuration={text('transitionDuration', undefined)}
    >
      {text('children', 'Test')}
    </Backdrop>
  ),
  {
    info: {

    },
  })
