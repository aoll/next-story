
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { SwipeableDrawer } from '../..';

storiesOf('atoms/SwipeableDrawer', module)
  .add('default', () => (
    <SwipeableDrawer
      anchor={select('anchor', ['left', 'top', 'right', 'bottom'], 'left')}
      disableBackdropTransition={boolean('disableBackdropTransition', false)}
      disableDiscovery={boolean('disableDiscovery', false)}
      disableSwipeToOpen={boolean('disableSwipeToOpen', typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent))}
      hideBackdrop={boolean('hideBackdrop', false)}
      hysteresis={text('hysteresis', 0.55)}
      minFlingVelocity={text('minFlingVelocity', 400)}
      onClose={text('onClose', undefined)}
      onOpen={text('onOpen', undefined)}
      open={boolean('open', false)}
      swipeAreaWidth={text('swipeAreaWidth', 20)}
      theme={text('theme', undefined)}
      variant={select('variant', ['permanent', 'persistent', 'temporary'], 'temporary')}
    >
      {text('children', 'Test')}
    </SwipeableDrawer>
  ),
  {
    info: {

    },
  });
