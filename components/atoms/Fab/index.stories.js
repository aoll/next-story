
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Fab } from '../..';

storiesOf('atoms/Fab', module)
  .add('default', () => (
    <Fab
      className={text('className', undefined)}
      color={select('color', ['default','inherit','primary','secondary'] ,'default')}
      disabled={boolean('disabled', false)}
      disableFocusRipple={boolean('disableFocusRipple', false)}
      disableRipple={boolean('disableRipple', undefined)}
      focusVisibleClassName={text('focusVisibleClassName', undefined)}
      href={text('href', undefined)}
      size={select('size', ['small','medium','large'] ,'large')}
      type={text('type', 'button')}
      variant={select('variant', ['round','extended'] ,'round')}
    >
      {text('children', 'Test')}
    </Fab>
  ),
  {
    info: {

    },
  })
