
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { NoSsr } from '../..';

storiesOf('atoms/NoSsr', module)
  .add('default', () => (
    <NoSsr
      defer={text('defer', false)}
      fallback={text('fallback', null)}
    >
      {text('children', 'Test')}
    </NoSsr>
  ),
  {
    info: {

    },
  })
