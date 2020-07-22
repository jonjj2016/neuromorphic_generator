import styled from 'styled-components';
export const Wrapper = styled.div`
  height: 50rem;
  width: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    height: 65rem;
    width: 25rem;
    padding: 8rem;
    margin-top: 60rem;
    .dir_1,
    .dir_2,
    .dir_3,
    .dir_4 {
      position: relative;
    }
    .dirButtons {
      display: flex;
    }
  }
  .dir_1 {
    position: absolute;

    top: 0;
    left: 0;
  }
  .dir_2 {
    position: absolute;
    top: 0;
    right: 5rem;
  }
  .dir_3 {
    position: absolute;
    bottom: 5rem;
    left: 0;
  }
  .dir_4 {
    position: absolute;
    bottom: 5rem;
    right: 5rem;
  }
`;
export const Content = styled.div`
  background: ${({ state }) => state.backgroundColor};
  height: ${({ state }) => state.size}px;
  width: ${({ state }) => state.size}px;
  border-radius: ${({ state }) => state.radius}%;
  box-shadow: ${({ state }) => state.box_shadow};
  -webkit-box-shadow: ${({ state }) => state.box_shadow};
  -moz-box-shadow: ${({ state }) => state.box_shadow};
  @media only screen and (max-width: 1100px) {
    height: 15rem;
    width: 15rem;
  }
`;
