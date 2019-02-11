
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Tabs } from '../..';

storiesOf('atoms/Tabs', module)
  .add('default', () => (
    <Tabs
      centered={boolean('centered', false)}
      indicatorColor={select('indicatorColor', ['secondary', 'primary'], 'secondary')}
      scrollButtons={select('scrollButtons', ['auto', 'on', 'off'], 'auto')}
      textColor={select('textColor', ['secondary', 'primary', 'inherit'], 'inherit')}
      theme={text('theme', undefined)}
      variant={select('variant', ['standard', 'scrollable', 'fullWidth'], 'standard')}
    >
      {text('children', 'Test')}
    </Tabs>
  ),
  {
    info: {

    },
  });
