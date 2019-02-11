
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { StepContent } from '../..';

storiesOf('atoms/StepContent', module)
  .add('default', () => (
    <StepContent
      active={boolean('active', undefined)}
      alternativeLabel={boolean('alternativeLabel', undefined)}
      className={text('className', undefined)}
      completed={boolean('completed', undefined)}
      last={boolean('last', undefined)}
      optional={boolean('optional', undefined)}
      orientation={select('orientation', ['horizontal','vertical'] ,undefined)}
      transitionDuration={text('transitionDuration', 'auto')}
      TransitionProps={text('TransitionProps', undefined)}
    >
      {text('children', 'Test')}
    </StepContent>
  ),
  {
    info: {

    },
  })
