
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { RadioGroup } from '../..';

storiesOf('atoms/RadioGroup', module)
  .add('default', () => (
    <RadioGroup
      name={text('name', undefined)}
    >
      {text('children', 'Test')}
    </RadioGroup>
  ),
  {
    info: {

    },
  });
