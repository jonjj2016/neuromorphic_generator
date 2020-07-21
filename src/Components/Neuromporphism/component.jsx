import React from 'react';
import { Wrapper, Content } from './Styled';
import detectDirection from '../../helpers/ditectDirection';
import defineColors from '../../helpers/defineColors';
import DirToggler from '../dirToggler';
import chroma from 'chroma-js';

const Component = ({ state, setState }) => {
  console.log(state);
  const dir_sign = detectDirection(state.current_direction, state.directions);
  const shades = chroma.scale(['#ffffff', state.color, '#222222']).colors(12);
  const colors = [chroma(shades[0]).alpha(state.intensity).hex(), chroma(shades[9]).alpha(state.intensity).hex()];

  const onClick = (name) => {
    setState({ ...state, current_direction: name });
  };
  return (
    <Wrapper state={state}>
      <Content colors={state.shades} dir_sign={dir_sign} state={state} />
      <div className='dirButtons'>
        {state.directions.map((item, index) => {
          return (
            <div key={index} className={`dir_${index + 1}`}>
              <DirToggler setState={setState} colors={state.shades} dir_sign={dir_sign} state={state} onClick={onClick} name={item} />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Component;
