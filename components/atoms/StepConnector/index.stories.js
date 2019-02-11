
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { StepConnector } from '../..';

storiesOf('atoms/StepConnector', module)
  .add('default', () => (
    <StepConnector
      active={boolean('active', undefined)}
      alternativeLabel={boolean('alternativeLabel', false)}
      className={text('className', undefined)}
      completed={boolean('completed', undefined)}
      disabled={boolean('disabled', undefined)}
      index={text('index', undefined)}
      orientation={select('orientation', ['horizontal','vertical'] ,'horizontal')}
    >
      {text('children', 'Test')}
    </StepConnector>
  ),
  {
    info: {

    },
  })
