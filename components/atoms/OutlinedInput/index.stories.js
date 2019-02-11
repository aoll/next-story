
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { OutlinedInput } from '../..';

storiesOf('atoms/OutlinedInput', module)
  .add('default', () => (
    <OutlinedInput
      autoComplete={text('autoComplete', undefined)}
      autoFocus={boolean('autoFocus', false)}
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      fullWidth={boolean('fullWidth', false)}
      id={text('id', undefined)}
      labelWidth={text('labelWidth', undefined)}
      margin={select('margin', ['dense', 'none'], undefined)}
      multiline={boolean('multiline', false)}
      name={text('name', undefined)}
      notched={boolean('notched', false)}
      placeholder={text('placeholder', undefined)}
      readOnly={boolean('readOnly', false)}
      required={boolean('required', false)}
    >
      {text('children', 'Test')}
    </OutlinedInput>
  ),
  {
    info: {

    },
  });
