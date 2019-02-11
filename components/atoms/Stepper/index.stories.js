
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Stepper } from '../..';

storiesOf('atoms/Stepper', module)
  .add('default', () => (
    <Stepper
      activeStep={text('activeStep', 0)}
      alternativeLabel={boolean('alternativeLabel', false)}
      nonLinear={boolean('nonLinear', false)}
      orientation={select('orientation', ['horizontal', 'vertical'], 'horizontal')}
    >
      {text('children', 'Test')}
    </Stepper>
  ),
  {
    info: {

    },
  });
