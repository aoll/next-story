
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Chip } from '../..';

storiesOf('atoms/Chip', module)
  .add('default', () => (
    <Chip
      clickable={boolean('clickable', false)}
      color={select('color', ['default', 'primary', 'secondary'], 'default')}
      variant={select('variant', ['default', 'outlined'], 'default')}
    >
      {text('children', 'Test')}
    </Chip>
  ),
  {
    info: {

    },
  });
