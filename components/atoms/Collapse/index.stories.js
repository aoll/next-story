
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Collapse } from '../..';

storiesOf('atoms/Collapse', module)
  .add('default', () => (
    <Collapse
      collapsedHeight={text('collapsedHeight', '0px')}
      in={boolean('in', false)}
      theme={text('theme', undefined)}
    >
      {text('children', 'Test')}
    </Collapse>
  ),
  {
    info: {

    },
  });
