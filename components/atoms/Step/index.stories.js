
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Step } from '../..';

storiesOf('atoms/Step', module)
  .add('default', () => (
    <Step
      active={boolean('active', false)}
      alternativeLabel={boolean('alternativeLabel', undefined)}
      className={text('className', undefined)}
      completed={boolean('completed', false)}
      connector={text('connector', undefined)}
      disabled={boolean('disabled', false)}
      index={text('index', undefined)}
      last={boolean('last', undefined)}
      orientation={select('orientation', ['horizontal','vertical'] ,undefined)}
    >
      {text('children', 'Test')}
    </Step>
  ),
  {
    info: {

    },
  })
