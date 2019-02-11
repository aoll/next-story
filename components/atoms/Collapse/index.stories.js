
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Collapse } from '../..';

storiesOf('atoms/Collapse', module)
  .add('default', () => (
    <Collapse
      className={text('className', undefined)}
      collapsedHeight={text('collapsedHeight', '0px')}
      in={boolean('in', undefined)}
      onEnter={text('onEnter', undefined)}
      onEntered={text('onEntered', undefined)}
      onEntering={text('onEntering', undefined)}
      onExit={text('onExit', undefined)}
      onExiting={text('onExiting', undefined)}
      style={text('style', undefined)}
      theme={text('theme', undefined)}
    >
      {text('children', 'Test')}
    </Collapse>
  ),
  {
    info: {

    },
  })
