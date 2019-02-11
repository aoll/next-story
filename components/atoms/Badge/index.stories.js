
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Badge } from '../..';

storiesOf('atoms/Badge', module)
  .add('default', () => (
    <Badge
      badgeContent={text('badgeContent', undefined)}
      className={text('className', undefined)}
      color={select('color', ['default','primary','secondary','error'] ,'default')}
      invisible={boolean('invisible', undefined)}
      max={text('max', 99)}
      showZero={boolean('showZero', false)}
      variant={select('variant', ['standard','dot'] ,'standard')}
    >
      {text('children', 'Test')}
    </Badge>
  ),
  {
    info: {

    },
  })
