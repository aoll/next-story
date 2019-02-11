
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { CardActionArea } from '../..';

storiesOf('atoms/CardActionArea', module)
  .add('default', () => (
    <CardActionArea
      focusVisibleClassName={text('focusVisibleClassName', undefined)}
    >
      {text('children', 'Test')}
    </CardActionArea>
  ),
  {
    info: {

    },
  });
