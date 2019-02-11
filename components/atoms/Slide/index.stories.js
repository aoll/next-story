
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Slide } from '../..';

storiesOf('atoms/Slide', module)
  .add('default', () => (
    <Slide
      direction={select('direction', ['left','right','up','down'] ,'down')}
      in={boolean('in', undefined)}
      onEnter={text('onEnter', undefined)}
      onEntering={text('onEntering', undefined)}
      onExit={text('onExit', undefined)}
      onExited={text('onExited', undefined)}
      style={text('style', undefined)}
      theme={text('theme', undefined)}
    >
      {text('children', 'Test')}
    </Slide>
  ),
  {
    info: {

    },
  })
