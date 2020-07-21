import styled from 'styled-components';
export const Wrapper = styled.div`
  height: 50rem;
  width: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* border: 5px solid; */
  box-sizing: border-box;
  .dir_1 {
    position: absolute;

    top: 0;
    left: 0;
    /* width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 50px 0 0;
    border-color: #007bff transparent transparent transparent; */
  }
  .dir_2 {
    position: absolute;
    top: 0;
    right: 0;
    /* width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 50px 50px 0;
    border-color: transparent #007bff transparent transparent; */
  }
  .dir_3 {
    position: absolute;
    bottom: 0;
    left: 0;
    /* width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 0 0 50px;
    border-color: transparent transparent transparent #007bff; */
  }
  .dir_4 {
    position: absolute;
    bottom: 0;
    right: 0;
    /* width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 50px 50px;
    border-color: transparent transparent #007bff transparent; */
  }
`;
export const Content = styled.div`
  background: ${({ state }) => state.backgroundColor};
  height: ${({ state }) => state.size}px;
  width: ${({ state }) => state.size}px;
  border-radius: ${({ state }) => state.radius}%;
  box-shadow: ${({ state }) => state.box_shadow};
`;
