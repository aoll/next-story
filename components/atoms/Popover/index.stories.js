
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Popover } from '../..';

storiesOf('atoms/Popover', module)
  .add('default', () => (
    <Popover
      anchorReference={select('anchorReference', ['anchorEl', 'anchorPosition', 'none'], 'anchorEl')}
      elevation={text('elevation', 8)}
      marginThreshold={text('marginThreshold', 16)}
      open={boolean('open', false)}
      role={text('role', undefined)}
    >
      {text('children', 'Test')}
    </Popover>
  ),
  {
    info: {

    },
  });
