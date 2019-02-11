
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { TextField } from '../..';

storiesOf('atoms/TextField', module)
  .add('default', () => (
    <TextField
      autoComplete={text('autoComplete', undefined)}
      autoFocus={boolean('autoFocus', undefined)}
      className={text('className', undefined)}
      defaultValue={text('defaultValue', undefined)}
      disabled={boolean('disabled', undefined)}
      error={boolean('error', undefined)}
      FormHelperTextProps={text('FormHelperTextProps', undefined)}
      fullWidth={boolean('fullWidth', undefined)}
      helperText={text('helperText', undefined)}
      id={text('id', undefined)}
      InputLabelProps={text('InputLabelProps', undefined)}
      InputProps={text('InputProps', undefined)}
      inputProps={text('inputProps', undefined)}
      inputRef={text('inputRef', undefined)}
      label={text('label', undefined)}
      margin={select('margin', ['none','dense','normal'] ,undefined)}
      multiline={boolean('multiline', undefined)}
      name={text('name', undefined)}
      onBlur={text('onBlur', undefined)}
      onChange={text('onChange', undefined)}
      onFocus={text('onFocus', undefined)}
      placeholder={text('placeholder', undefined)}
      required={boolean('required', false)}
      rows={text('rows', undefined)}
      rowsMax={text('rowsMax', undefined)}
      select={boolean('select', false)}
      SelectProps={text('SelectProps', undefined)}
      type={text('type', undefined)}
      value={text('value', undefined)}
      variant={select('variant', ['standard','outlined','filled'] ,'standard')}
    >
      {text('children', 'Test')}
    </TextField>
  ),
  {
    info: {

    },
  })
