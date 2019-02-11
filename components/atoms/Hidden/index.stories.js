
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Hidden } from '../..';

storiesOf('atoms/Hidden', module)
  .add('default', () => (
    <Hidden
      implementation={select('implementation', ['js', 'css'], 'js')}
      initialWidth={select('initialWidth', ['xs', 'sm', 'md', 'lg', 'xl'], undefined)}
      lgDown={boolean('lgDown', false)}
      lgUp={boolean('lgUp', false)}
      mdDown={boolean('mdDown', false)}
      mdUp={boolean('mdUp', false)}
      smDown={boolean('smDown', false)}
      smUp={boolean('smUp', false)}
      xlDown={boolean('xlDown', false)}
      xlUp={boolean('xlUp', false)}
      xsDown={boolean('xsDown', false)}
      xsUp={boolean('xsUp', false)}
    >
      {text('children', 'Test')}
    </Hidden>
  ),
  {
    info: {

    },
  });
