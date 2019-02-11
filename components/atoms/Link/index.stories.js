
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Link } from '../..';

storiesOf('atoms/Link', module)
  .add('default', () => (
    <Link
      block={boolean('block', false)}
      color={select('color', ['error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary'], 'primary')}
      underline={select('underline', ['none', 'hover', 'always'], 'hover')}
      variant={text('variant', 'inherit')}
    >
      {text('children', 'Test')}
    </Link>
  ),
  {
    info: {

    },
  });
