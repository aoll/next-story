
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Modal } from '../..';

storiesOf('atoms/Modal', module)
  .add('default', () => (
    <Modal
      closeAfterTransition={boolean('closeAfterTransition', false)}
      disableAutoFocus={boolean('disableAutoFocus', false)}
      disableBackdropClick={boolean('disableBackdropClick', false)}
      disableEnforceFocus={boolean('disableEnforceFocus', false)}
      disableEscapeKeyDown={boolean('disableEscapeKeyDown', false)}
      disablePortal={boolean('disablePortal', false)}
      disableRestoreFocus={boolean('disableRestoreFocus', false)}
      hideBackdrop={boolean('hideBackdrop', false)}
      keepMounted={boolean('keepMounted', false)}
      open={boolean('open', false)}
    >
      {text('children', 'Test')}
    </Modal>
  ),
  {
    info: {

    },
  });
