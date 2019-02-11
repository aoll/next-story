
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Popover } from '../..';

storiesOf('atoms/Popover', module)
  .add('default', () => (
    <Popover
      action={text('action', undefined)}
      anchorEl={text('anchorEl', undefined)}
      anchorOrigin={text('anchorOrigin', {
  vertical: 'top',
  horizontal: 'left'
})}
      anchorPosition={text('anchorPosition', undefined)}
      anchorReference={select('anchorReference', ['anchorEl','anchorPosition','none'] ,'anchorEl')}
      container={text('container', undefined)}
      elevation={text('elevation', 8)}
      getContentAnchorEl={text('getContentAnchorEl', undefined)}
      marginThreshold={text('marginThreshold', 16)}
      ModalClasses={text('ModalClasses', undefined)}
      onClose={text('onClose', undefined)}
      onEnter={text('onEnter', undefined)}
      onEntered={text('onEntered', undefined)}
      onEntering={text('onEntering', undefined)}
      onExit={text('onExit', undefined)}
      onExited={text('onExited', undefined)}
      onExiting={text('onExiting', undefined)}
      open={boolean('open', undefined)}
      PaperProps={text('PaperProps', undefined)}
      role={text('role', undefined)}
      transformOrigin={text('transformOrigin', {
  vertical: 'top',
  horizontal: 'left'
})}
      transitionDuration={text('transitionDuration', 'auto')}
      TransitionProps={text('TransitionProps', undefined)}
    >
      {text('children', 'Test')}
    </Popover>
  ),
  {
    info: {

    },
  })
