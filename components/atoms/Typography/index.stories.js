
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Typography } from '../..';

storiesOf('atoms/Typography', module)
  .add('default', () => (
    <Typography
      align={select('align', ['inherit', 'left', 'center', 'right', 'justify'], 'inherit')}
      color={select('color', ['default', 'error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary'], 'default')}
      gutterBottom={boolean('gutterBottom', false)}
      inline={boolean('inline', false)}
      internalDeprecatedVariant={boolean('internalDeprecatedVariant', false)}
      noWrap={boolean('noWrap', false)}
      paragraph={boolean('paragraph', false)}
      theme={text('theme', undefined)}
      variant={select('variant', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly',"inherit",'display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading'], undefined)}
    >
      {text('children', 'Test')}
    </Typography>
  ),
  {
    info: {

    },
  });
