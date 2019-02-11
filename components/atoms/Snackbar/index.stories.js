
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Snackbar } from '../..';

storiesOf('atoms/Snackbar', module)
  .add('default', () => (
    <Snackbar
      autoHideDuration={text('autoHideDuration', undefined)}
      disableWindowBlurListener={boolean('disableWindowBlurListener', false)}
      open={boolean('open', false)}
      resumeHideDuration={text('resumeHideDuration', undefined)}
    >
      {text('children', 'Test')}
    </Snackbar>
  ),
  {
    info: {

    },
  });
