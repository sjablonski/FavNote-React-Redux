import React from 'react';
import styled from 'styled-components';
import { itemTypes } from 'config';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const options = [bulbIcon, logoutIcon, penIcon, plusIcon, twitterIcon];

const Background = styled.div`
  display: inline-block;
  padding: 2rem;
  background-color: ${({ color, theme }) => (theme[color] ? theme[color] : color)};
`;

export default {
  title: 'atoms/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options,
      },
    },
    color: {
      control: {
        type: 'select',
        options: itemTypes,
      },
    },
  },
};

export const Default = (args) => (
  <Background color={args.color}>
    <ButtonIcon {...args} />
  </Background>
);
Default.args = {
  icon: options[0],
  color: itemTypes[0],
};

export const Active = Default.bind({});
Active.args = {
  icon: options[0],
  className: 'active',
};
