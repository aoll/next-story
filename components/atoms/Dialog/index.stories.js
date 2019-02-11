
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Dialog } from '../..';

storiesOf('atoms/Dialog', module)
  .add('default', () => (
    <Dialog
      disableBackdropClick={boolean('disableBackdropClick', false)}
      disableEscapeKeyDown={boolean('disableEscapeKeyDown', false)}
      fullScreen={boolean('fullScreen', false)}
      fullWidth={boolean('fullWidth', false)}
      maxWidth={select('maxWidth', ['xs', 'sm', 'md', 'lg', 'xl',false], 'sm')}
      open={boolean('open', false)}
      scroll={select('scroll', ['body', 'paper'], 'paper')}
    >
      {text('children', 'Test')}
    </Dialog>
  ),
  {
    info: {

    },
  });
