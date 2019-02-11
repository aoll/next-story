
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { FormHelperText } from '../..';

storiesOf('atoms/FormHelperText', module)
  .add('default', () => (
    <FormHelperText
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      filled={boolean('filled', false)}
      focused={boolean('focused', false)}
      margin={select('margin', ['dense'], undefined)}
      required={boolean('required', false)}
      variant={select('variant', ['standard', 'outlined', 'filled'], undefined)}
    >
      {text('children', 'Test')}
    </FormHelperText>
  ),
  {
    info: {

    },
  });
