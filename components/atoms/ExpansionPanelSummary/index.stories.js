
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ExpansionPanelSummary } from '../..';

storiesOf('atoms/ExpansionPanelSummary', module)
  .add('default', () => (
    <ExpansionPanelSummary
      className={text('className', undefined)}
      disabled={boolean('disabled', false)}
      expanded={boolean('expanded', undefined)}
      expandIcon={text('expandIcon', undefined)}
      IconButtonProps={text('IconButtonProps', undefined)}
      onBlur={text('onBlur', undefined)}
      onChange={text('onChange', undefined)}
      onClick={text('onClick', undefined)}
      onFocusVisible={text('onFocusVisible', undefined)}
    >
      {text('children', 'Test')}
    </ExpansionPanelSummary>
  ),
  {
    info: {

    },
  })
