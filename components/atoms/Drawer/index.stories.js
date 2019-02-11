
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Drawer } from '../..';

storiesOf('atoms/Drawer', module)
  .add('default', () => (
    <Drawer
      anchor={select('anchor', ['left','top','right','bottom'] ,'left')}
      BackdropProps={text('BackdropProps', undefined)}
      className={text('className', undefined)}
      elevation={text('elevation', 16)}
      ModalProps={text('ModalProps', undefined)}
      onClose={text('onClose', undefined)}
      open={boolean('open', false)}
      PaperProps={text('PaperProps', undefined)}
      SlideProps={text('SlideProps', undefined)}
      theme={text('theme', undefined)}
      variant={select('variant', ['permanent','persistent','temporary'] ,'temporary')}
    >
      {text('children', 'Test')}
    </Drawer>
  ),
  {
    info: {

    },
  })
