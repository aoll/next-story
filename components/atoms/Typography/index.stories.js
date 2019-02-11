
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Typography } from '../..';

storiesOf('atoms/Typography', module)
  .add('default', () => (
    <Typography
      align={select('align', ['inherit','left','center','right','justify'] ,'inherit')}
      className={text('className', undefined)}
      color={select('color', ['default','error','inherit','primary','secondary','textPrimary','textSecondary'] ,'default')}
      gutterBottom={boolean('gutterBottom', false)}
      headlineMapping={text('headlineMapping', {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  // deprecated
  display4: 'h1',
  display3: 'h1',
  display2: 'h1',
  display1: 'h1',
  headline: 'h1',
  title: 'h2',
  subheading: 'h3'
})}
      inline={boolean('inline', false)}
      internalDeprecatedVariant={boolean('internalDeprecatedVariant', undefined)}
      noWrap={boolean('noWrap', false)}
      paragraph={boolean('paragraph', false)}
      theme={text('theme', undefined)}
      variant={select('variant', ['h1','h2','h3','h4','h5','h6','subtitle1','subtitle2','body1','body2','caption','button','overline','srOnly',"inherit",'display4','display3','display2','display1','headline','title','subheading'] ,undefined)}
    >
      {text('children', 'Test')}
    </Typography>
  ),
  {
    info: {

    },
  })
