
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Modal } from '../..';

storiesOf('atoms/Modal', module)
  .add('default', () => (
    <Modal
      BackdropProps={text('BackdropProps', undefined)}
      className={text('className', undefined)}
      closeAfterTransition={boolean('closeAfterTransition', false)}
      container={text('container', undefined)}
      disableAutoFocus={boolean('disableAutoFocus', false)}
      disableBackdropClick={boolean('disableBackdropClick', false)}
      disableEnforceFocus={boolean('disableEnforceFocus', false)}
      disableEscapeKeyDown={boolean('disableEscapeKeyDown', false)}
      disablePortal={boolean('disablePortal', false)}
      disableRestoreFocus={boolean('disableRestoreFocus', false)}
      hideBackdrop={boolean('hideBackdrop', false)}
      keepMounted={boolean('keepMounted', false)}
      onBackdropClick={text('onBackdropClick', undefined)}
      onClose={text('onClose', undefined)}
      onEscapeKeyDown={text('onEscapeKeyDown', undefined)}
      onRendered={text('onRendered', undefined)}
      open={boolean('open', undefined)}
    >
      {text('children', 'Test')}
    </Modal>
  ),
  {
    info: {

    },
  })
