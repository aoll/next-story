
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Switch } from '../..';

storiesOf('atoms/Switch', module)
  .add('default', () => (
    <Switch
      color={select('color', ['primary', 'secondary', 'default'], 'secondary')}
      defaultChecked={boolean('defaultChecked', false)}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
      id={text('id', undefined)}
    >
      {text('children', 'Test')}
    </Switch>
  ),
  {
    info: {

    },
  });
