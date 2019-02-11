
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Dialog } from '../..';

storiesOf('atoms/Dialog', module)
  .add('default', () => (
    <Dialog
      BackdropProps={text('BackdropProps', undefined)}
      className={text('className', undefined)}
      disableBackdropClick={boolean('disableBackdropClick', false)}
      disableEscapeKeyDown={boolean('disableEscapeKeyDown', false)}
      fullScreen={boolean('fullScreen', false)}
      fullWidth={boolean('fullWidth', false)}
      maxWidth={select('maxWidth', ['xs','sm','md','lg','xl',false] ,'sm')}
      onBackdropClick={text('onBackdropClick', undefined)}
      onClose={text('onClose', undefined)}
      onEnter={text('onEnter', undefined)}
      onEntered={text('onEntered', undefined)}
      onEntering={text('onEntering', undefined)}
      onEscapeKeyDown={text('onEscapeKeyDown', undefined)}
      onExit={text('onExit', undefined)}
      onExited={text('onExited', undefined)}
      onExiting={text('onExiting', undefined)}
      open={boolean('open', undefined)}
      PaperProps={text('PaperProps', undefined)}
      scroll={select('scroll', ['body','paper'] ,'paper')}
      TransitionProps={text('TransitionProps', undefined)}
    >
      {text('children', 'Test')}
    </Dialog>
  ),
  {
    info: {

    },
  })
