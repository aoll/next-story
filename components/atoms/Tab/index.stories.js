
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Tab } from '../..';

storiesOf('atoms/Tab', module)
  .add('default', () => (
    <Tab
      disabled={boolean('disabled', false)}
      fullWidth={boolean('fullWidth', false)}
      selected={boolean('selected', false)}
      textColor={select('textColor', ['secondary', 'primary', 'inherit'], 'inherit')}
    >
      {text('children', 'Test')}
    </Tab>
  ),
  {
    info: {

    },
  });
