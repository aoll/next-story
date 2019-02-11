
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { FilledInput } from '../..';

storiesOf('atoms/FilledInput', module)
  .add('default', () => (
    <FilledInput
      autoComplete={text('autoComplete', undefined)}
      autoFocus={boolean('autoFocus', false)}
      disabled={boolean('disabled', false)}
      disableUnderline={boolean('disableUnderline', false)}
      error={boolean('error', false)}
      fullWidth={boolean('fullWidth', false)}
      id={text('id', undefined)}
      margin={select('margin', ['dense', 'none'], undefined)}
      multiline={boolean('multiline', false)}
      name={text('name', undefined)}
      placeholder={text('placeholder', undefined)}
      readOnly={boolean('readOnly', false)}
      required={boolean('required', false)}
    >
      {text('children', 'Test')}
    </FilledInput>
  ),
  {
    info: {

    },
  });
