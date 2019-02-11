
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ClickAwayListener } from '../..';

storiesOf('atoms/ClickAwayListener', module)
  .add('default', () => (
    <ClickAwayListener
      mouseEvent={select('mouseEvent', ['onClick','onMouseDown','onMouseUp',false] ,'onMouseUp')}
      onClickAway={text('onClickAway', undefined)}
      touchEvent={select('touchEvent', ['onTouchStart','onTouchEnd',false] ,'onTouchEnd')}
    >
      {text('children', 'Test')}
    </ClickAwayListener>
  ),
  {
    info: {

    },
  })
