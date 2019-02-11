
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { CardMedia } from '../..';

storiesOf('atoms/CardMedia', module)
  .add('default', () => (
    <CardMedia
      image={text('image', undefined)}
      src={text('src', undefined)}
    >
      {text('children', 'Test')}
    </CardMedia>
  ),
  {
    info: {

    },
  });
