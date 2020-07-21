import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${({ color }) => color};
  height: 50rem;
  width: 50rem;
  border-radius: 40px;
  padding: 2rem;
  box-shadow: ${({ dir_sign, state }) => `${dir_sign[0] + state.distance}px ${dir_sign[1] + state.distance}px ${state.blure}px #a4a4a4,${dir_sign[2] + state.distance}px ${dir_sign[3] + state.distance}px ${state.blure}px #ffffff`};
  box-shadow: ${({ state }) => state.box_shadow};
  @media only screen and (max-width: 1100px) {
    min-height: 70rem;
    width: 25rem;
    margin-top: 10rem;
  }

  .container {
    display: flex;
    align-items: center;
    height: 4rem;

    h2 {
      height: 100%;
      margin: 0;
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      margin-right: 2rem;
    }
  }
  .content {
    position: relative;
    width: 100%;
    padding: 2rem;
    box-shadow: ${({ state }) => ` inset 20px 20px 60px #489dcf ${state.shades[0]},inset -20px -20px 60px  ${state.shades[1]}`};
    border-radius: 2rem;
    .icon {
      position: absolute;
      top: 20%;
      cursor: pointer;
      right: 10%;
    }
  }
  .buttons {
    width: 100%;
    display: flex;
    height: 4rem;
    padding: 0.5rem 0;
    margin: 3rem auto;
    @media only screen and (max-width: 600px) {
      height: 16rem;
      flex-direction: column;
      margin-bottom: 2rem;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const Input = styled.input`
  height: 4rem;
  width: 100%;
  border-radius: 20px;
  border: none;
  padding: 1rem;
  background-color: transparent;
  color: ${({ color }) => color};
  outline: none;
  font-size: 1.5rem;
  letter-spacing: 2px;
  box-shadow: ${({ state }) => state.box_shadow};
`;
