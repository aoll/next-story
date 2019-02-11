
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Radio } from '../..';

storiesOf('atoms/Radio', module)
  .add('default', () => (
    <Radio
      checked={text('checked', undefined)}
      checkedIcon={text('checkedIcon', undefined)}
      color={select('color', ['primary','secondary','default'] ,'secondary')}
      disabled={boolean('disabled', undefined)}
      disableRipple={boolean('disableRipple', undefined)}
      icon={text('icon', undefined)}
      id={text('id', undefined)}
      inputProps={text('inputProps', undefined)}
      inputRef={text('inputRef', undefined)}
      onChange={text('onChange', undefined)}
      type={text('type', undefined)}
      value={text('value', undefined)}
    >
      {text('children', 'Test')}
    </Radio>
  ),
  {
    info: {

    },
  })
