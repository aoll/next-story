
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  text, boolean, select, number,
} from '@storybook/addon-knobs';
import { Button } from '../..';

storiesOf('atoms/Button', module)
  .add('default', () => (
    <Button
      className={text('className', undefined)}
      color={select('color', ['default', 'inherit', 'primary', 'secondary'], 'default')}
      component={text('component', 'button')}
      disabled={boolean('disabled', false)}
      disableFocusRipple={boolean('disableFocusRipple', false)}
      disableRipple={boolean('disableRipple', undefined)}
      focusVisibleClassName={text('focusVisibleClassName', undefined)}
      fullWidth={boolean('fullWidth', false)}
      href={text('href', undefined)}
      mini={boolean('mini', false)}
      size={select('size', ['small', 'medium', 'large'], 'medium')}
      type={text('type', 'button')}
      variant={select('variant', ['text', 'outlined', 'contained', 'fab', 'extendedFab', 'flat', 'raised'], 'text')}
    >
      {text('children', 'Test')}
    </Button>
  ),
  {
    info: {

    },
  });
