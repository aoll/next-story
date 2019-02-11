
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Tooltip } from '../..';

storiesOf('atoms/Tooltip', module)
  .add('default', () => (
    <Tooltip
      disableFocusListener={boolean('disableFocusListener', false)}
      disableHoverListener={boolean('disableHoverListener', false)}
      disableTouchListener={boolean('disableTouchListener', false)}
      enterDelay={text('enterDelay', 0)}
      enterTouchDelay={text('enterTouchDelay', 1000)}
      id={text('id', undefined)}
      interactive={boolean('interactive', false)}
      leaveDelay={text('leaveDelay', 0)}
      leaveTouchDelay={text('leaveTouchDelay', 1500)}
      onClose={text('onClose', undefined)}
      onOpen={text('onOpen', undefined)}
      open={boolean('open', undefined)}
      placement={select('placement', ['bottom-end','bottom-start','bottom','left-end','left-start','left','right-end','right-start','right','top-end','top-start','top'] ,'bottom')}
      PopperProps={text('PopperProps', undefined)}
      theme={text('theme', undefined)}
      title={text('title', undefined)}
      TransitionProps={text('TransitionProps', undefined)}
    >
      {text('children', 'Test')}
    </Tooltip>
  ),
  {
    info: {

    },
  })
