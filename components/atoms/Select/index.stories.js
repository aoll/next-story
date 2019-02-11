
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Select } from '../..';

storiesOf('atoms/Select', module)
  .add('default', () => (
    <Select
      autoWidth={boolean('autoWidth', false)}
      displayEmpty={boolean('displayEmpty', false)}
      inputProps={text('inputProps', undefined)}
      MenuProps={text('MenuProps', undefined)}
      multiple={boolean('multiple', false)}
      native={boolean('native', false)}
      onChange={text('onChange', undefined)}
      onClose={text('onClose', undefined)}
      onOpen={text('onOpen', undefined)}
      open={boolean('open', undefined)}
      renderValue={text('renderValue', undefined)}
      SelectDisplayProps={text('SelectDisplayProps', undefined)}
      value={text('value', undefined)}
      variant={select('variant', ['standard','outlined','filled'] ,undefined)}
    >
      {text('children', 'Test')}
    </Select>
  ),
  {
    info: {

    },
  })
