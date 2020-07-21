import React, { useState, useEffect } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Main from './Components/Neuromporphism/Container';
import Controllers from './Components/Controllers/Container';
import styled from 'styled-components';
import { compose_shadow, defineShades } from './helpers/ditectDirection';
import Mdal from './Components/Modal';

function App() {
  const [state, setState] = useState({
    color: '#122438',
    current_direction: 'right bottom',
    directions: ['right bottom', 'left bottom', 'right top', 'left top'],
    size: 410,
    radius: 30,
    backgroundColor: '#122438',
    distance: 20,
    intensity: 0.2,
    blure: 60,
    shades: [],
    spread: 0,
    shape: 1,
    copied: false,
    shapes: [1, 2, 3, 4],
    box_shadow: '20px 20px 60px #489dcf,-20px -20px 60px #62d5ff ',
  });
  useEffect(() => {
    setState({ ...state, box_shadow: compose_shadow(state), shades: defineShades(state.color, state.intensity) });
  }, [state.color, state.spread, state.current_direction, state.distance, state.radius, state.blure, state.intensity, state.shape, state.backgroundColor]);
  return (
    <Wrapper color={state.color}>
      <Mdal state={state} setState={setState} />
      <Main state={state} setState={setState} />
      <Controllers state={state} setState={setState} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background: ${({ color }) => color};
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    overflow-y: scroll;
    padding: 4rem 0;
  }
`;
export default App;
