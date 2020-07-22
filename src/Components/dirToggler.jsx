import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const DirToggler = ({ name, dir_sign, state, onClick, colors }) => {
  const onClickHandler = () => {
    onClick(name);
  };

  return (
    <Wrapper onClick={onClickHandler} dir_sign={dir_sign} colors={colors} state={state} className='dir dir_1'>
      <div>
        <Icon name='sun' size='big' color={state.current_direction === name ? 'yellow' : 'grey'} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 5rem;
  width: 5rem;
  padding: 0.5rem;
  box-sizing: border-box;
  div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    align-items: center;
    background-color: transparent;
    box-shadow: inset ${({ dir_sign, state, colors }) => `${dir_sign[0]}6px ${dir_sign[1]}6px ${state.blure}px ${colors[1]},inset ${dir_sign[2]}6px ${dir_sign[3]}6px ${state.blure}px ${colors[0]}`};
    -webkit-box-shadow:inset ${({ dir_sign, state, colors }) => `${dir_sign[0]}6px ${dir_sign[1]}6px ${state.blure}px ${colors[1]},inset ${dir_sign[2]}6px ${dir_sign[3]}6px ${state.blure}px ${colors[0]}`};
    -moz-box-shadow:inset ${({ dir_sign, state, colors }) => `${dir_sign[0]}6px ${dir_sign[1]}6px ${state.blure}px ${colors[1]},inset ${dir_sign[2]}6px ${dir_sign[3]}6px ${state.blure}px ${colors[0]}`}
}
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
  /* background: ${({ state }) => state.color}; */
  box-shadow:  ${({ dir_sign, state, colors }) => state.box_shadow};
  -webkit-box-shadow:${({ dir_sign, state, colors }) => state.box_shadow};
    -moz-box-shadow:${({ dir_sign, state, colors }) => state.box_shadow}
  /* box-shadow:  ${({ dir_sign, state, colors }) => `${dir_sign[0]}6px ${dir_sign[1]}6px ${state.blure}px ${colors[1]}, ${dir_sign[2]}6px ${dir_sign[3]}6px ${state.blure}px ${colors[0]}`}; */
 
  /* box-shadow: ${({ dir_sign, state, colors }) => `${dir_sign[0] + state.distance}px ${dir_sign[1] + state.distance}px ${state.blure}px ${colors[1]},${dir_sign[2] + state.distance}px ${dir_sign[3] + state.distance}px ${state.blure}px ${colors[0]}`}; */
`;
export default DirToggler;
