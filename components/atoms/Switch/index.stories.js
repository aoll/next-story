
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Switch } from '../..';

storiesOf('atoms/Switch', module)
  .add('default', () => (
    <Switch
      checked={text('checked', undefined)}
      checkedIcon={text('checkedIcon', undefined)}
      className={text('className', undefined)}
      color={select('color', ['primary','secondary','default'] ,'secondary')}
      defaultChecked={boolean('defaultChecked', undefined)}
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
    </Switch>
  ),
  {
    info: {

    },
  })
