
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ExpansionPanel } from '../..';

storiesOf('atoms/ExpansionPanel', module)
  .add('default', () => (
    <ExpansionPanel
      className={text('className', undefined)}
      CollapseProps={text('CollapseProps', undefined)}
      defaultExpanded={boolean('defaultExpanded', false)}
      disabled={boolean('disabled', false)}
      expanded={boolean('expanded', undefined)}
      onChange={text('onChange', undefined)}
      square={boolean('square', false)}
    >
      {text('children', 'Test')}
    </ExpansionPanel>
  ),
  {
    info: {

    },
  })
