
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Checkbox } from '../..';

storiesOf('atoms/Checkbox', module)
  .add('default', () => (
    <Checkbox
      color={select('color', ['primary', 'secondary', 'default'], 'secondary')}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
      id={text('id', undefined)}
      indeterminate={boolean('indeterminate', false)}
    >
      {text('children', 'Test')}
    </Checkbox>
  ),
  {
    info: {

    },
  });
