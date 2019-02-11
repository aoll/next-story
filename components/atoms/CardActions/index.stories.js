
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { CardActions } from '../..';

storiesOf('atoms/CardActions', module)
  .add('default', () => (
    <CardActions
      className={text('className', undefined)}
      disableActionSpacing={boolean('disableActionSpacing', false)}
    >
      {text('children', 'Test')}
    </CardActions>
  ),
  {
    info: {

    },
  })
