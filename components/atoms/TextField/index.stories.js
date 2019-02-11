
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { TextField } from '../..';

storiesOf('atoms/TextField', module)
  .add('default', () => (
    <TextField
      autoComplete={text('autoComplete', undefined)}
      autoFocus={boolean('autoFocus', false)}
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      fullWidth={boolean('fullWidth', false)}
      id={text('id', undefined)}
      margin={select('margin', ['none', 'dense', 'normal'], undefined)}
      multiline={boolean('multiline', false)}
      name={text('name', undefined)}
      placeholder={text('placeholder', undefined)}
      required={boolean('required', false)}
      select={boolean('select', false)}
      variant={select('variant', ['standard', 'outlined', 'filled'], 'standard')}
    >
      {text('children', 'Test')}
    </TextField>
  ),
  {
    info: {

    },
  });
