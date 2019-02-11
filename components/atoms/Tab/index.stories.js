
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Tab } from '../..';

storiesOf('atoms/Tab', module)
  .add('default', () => (
    <Tab
      className={text('className', undefined)}
      disabled={boolean('disabled', false)}
      fullWidth={boolean('fullWidth', undefined)}
      icon={text('icon', undefined)}
      indicator={text('indicator', undefined)}
      label={text('label', undefined)}
      onChange={text('onChange', undefined)}
      onClick={text('onClick', undefined)}
      selected={boolean('selected', undefined)}
      textColor={select('textColor', ['secondary','primary','inherit'] ,'inherit')}
      value={text('value', undefined)}
    >
      {text('children', 'Test')}
    </Tab>
  ),
  {
    info: {

    },
  })
