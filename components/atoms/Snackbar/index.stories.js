
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Snackbar } from '../..';

storiesOf('atoms/Snackbar', module)
  .add('default', () => (
    <Snackbar
      action={text('action', undefined)}
      anchorOrigin={text('anchorOrigin', {
  vertical: 'bottom',
  horizontal: 'center'
})}
      autoHideDuration={text('autoHideDuration', undefined)}
      className={text('className', undefined)}
      ClickAwayListenerProps={text('ClickAwayListenerProps', undefined)}
      ContentProps={text('ContentProps', undefined)}
      disableWindowBlurListener={boolean('disableWindowBlurListener', false)}
      key={text('key', undefined)}
      message={text('message', undefined)}
      onClose={text('onClose', undefined)}
      onEnter={text('onEnter', undefined)}
      onEntered={text('onEntered', undefined)}
      onEntering={text('onEntering', undefined)}
      onExit={text('onExit', undefined)}
      onExited={text('onExited', undefined)}
      onExiting={text('onExiting', undefined)}
      onMouseEnter={text('onMouseEnter', undefined)}
      onMouseLeave={text('onMouseLeave', undefined)}
      open={boolean('open', undefined)}
      resumeHideDuration={text('resumeHideDuration', undefined)}
      TransitionProps={text('TransitionProps', undefined)}
    >
      {text('children', 'Test')}
    </Snackbar>
  ),
  {
    info: {

    },
  })
