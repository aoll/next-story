
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { RadioGroup } from '../..';

storiesOf('atoms/RadioGroup', module)
  .add('default', () => (
    <RadioGroup
      defaultValue={text('defaultValue', undefined)}
      name={text('name', undefined)}
      onBlur={text('onBlur', undefined)}
      onChange={text('onChange', undefined)}
      onKeyDown={text('onKeyDown', undefined)}
      value={text('value', undefined)}
    >
      {text('children', 'Test')}
    </RadioGroup>
  ),
  {
    info: {

    },
  })
