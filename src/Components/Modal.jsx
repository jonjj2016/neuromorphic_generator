import React, { useEffect } from 'react';
import { isDark } from '../helpers/ditectDirection';
import styled from 'styled-components';

let interval;
const Modal = ({ state, setState }) => {
  useEffect(() => {
    if (state.copied) {
      interval = setTimeout(() => {
        setState({ ...state, copied: false });
      }, 1500);
    }
    return () => clearTimeout(interval);
  }, [state.copied]);
  return (
    <ModalWrapper color={isDark(state.color)} open={state.copied}>
      Copied!!!
    </ModalWrapper>
  );
};
const ModalWrapper = styled.div`
  font-size: 3rem;
  position: fixed;
  z-index: 10;
  color: ${({ color }) => color};
  top: 5%;
  right: 10%;
  transition: 300ms;
  transform: scale(${({ open }) => (open ? 1 : 0)});
`;

export default Modal;
