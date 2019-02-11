
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ListItemText } from '../..';

storiesOf('atoms/ListItemText', module)
  .add('default', () => (
    <ListItemText
      disableTypography={boolean('disableTypography', false)}
      inset={boolean('inset', false)}
      theme={text('theme', undefined)}
    >
      {text('children', 'Test')}
    </ListItemText>
  ),
  {
    info: {

    },
  });
