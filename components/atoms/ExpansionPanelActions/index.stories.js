
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ExpansionPanelActions } from '../..';

storiesOf('atoms/ExpansionPanelActions', module)
  .add('default', () => (
    <ExpansionPanelActions
      className={text('className', undefined)}
    >
      {text('children', 'Test')}
    </ExpansionPanelActions>
  ),
  {
    info: {

    },
  })
