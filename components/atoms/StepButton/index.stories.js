
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { StepButton } from '../..';

storiesOf('atoms/StepButton', module)
  .add('default', () => (
    <StepButton
      active={boolean('active', undefined)}
      alternativeLabel={boolean('alternativeLabel', undefined)}
      className={text('className', undefined)}
      completed={boolean('completed', undefined)}
      disabled={boolean('disabled', undefined)}
      icon={text('icon', undefined)}
      last={boolean('last', undefined)}
      optional={text('optional', undefined)}
      orientation={select('orientation', ['horizontal','vertical'] ,undefined)}
    >
      {text('children', 'Test')}
    </StepButton>
  ),
  {
    info: {

    },
  })
