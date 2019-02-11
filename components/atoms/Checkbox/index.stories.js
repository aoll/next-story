
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Checkbox } from '../..';

storiesOf('atoms/Checkbox', module)
  .add('default', () => (
    <Checkbox
      checked={text('checked', undefined)}
      className={text('className', undefined)}
      color={select('color', ['primary','secondary','default'] ,'secondary')}
      disabled={boolean('disabled', undefined)}
      disableRipple={boolean('disableRipple', undefined)}
      id={text('id', undefined)}
      indeterminate={boolean('indeterminate', false)}
      inputProps={text('inputProps', undefined)}
      inputRef={text('inputRef', undefined)}
      onChange={text('onChange', undefined)}
      type={text('type', undefined)}
      value={text('value', undefined)}
    >
      {text('children', 'Test')}
    </Checkbox>
  ),
  {
    info: {

    },
  })
