
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Menu } from '../..';

storiesOf('atoms/Menu', module)
  .add('default', () => (
    <Menu
      anchorEl={text('anchorEl', undefined)}
      disableAutoFocusItem={boolean('disableAutoFocusItem', false)}
      MenuListProps={text('MenuListProps', undefined)}
      onClose={text('onClose', undefined)}
      onEnter={text('onEnter', undefined)}
      onEntered={text('onEntered', undefined)}
      onEntering={text('onEntering', undefined)}
      onExit={text('onExit', undefined)}
      onExited={text('onExited', undefined)}
      onExiting={text('onExiting', undefined)}
      open={boolean('open', undefined)}
      PaperProps={text('PaperProps', undefined)}
      PopoverClasses={text('PopoverClasses', undefined)}
      theme={text('theme', undefined)}
      transitionDuration={text('transitionDuration', 'auto')}
    >
      {text('children', 'Test')}
    </Menu>
  ),
  {
    info: {

    },
  })
