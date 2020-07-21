import React from 'react';
import styled from 'styled-components';
import { isDark } from '../helpers/ditectDirection';

const Button = ({ btn_txt, color, ...props }) => {
  return (
    <Btn col={isDark(color)} color={color} {...props}>
      {btn_txt}
    </Btn>
  );
};

const Btn = styled.button`
  width: 100%;
  text-transform: uppercase;
  background-color: ${({ color }) => color};
  margin: 0 1rem;
  color:${({ col }) => col};
  border: none;
  cursor: pointer;
  border-radius: 15px;
  /* box-shadow: ${({ box_shadow }) => box_shadow}; */
  @media only screen and (max-width: 600px) {
      flex-direction: column;
      margin:1rem
    }
`;

export default Button;
