import React, { useState } from 'react';
import { Wrapper, Input } from './Styled';
import detectDirection, { isDark } from '../../helpers/ditectDirection';
import Slider from '../Slider/Slider';
import Button from '../Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Icon } from 'semantic-ui-react';

const Component = ({ state, setState }) => {
  const dir_sign = detectDirection(state.current_direction, state.directions);
  const [stat, setStat] = useState({ input: state.color });
  const text = `
border-radius: ${state.radius}%; 
background: ${state.backgroundColor}; 
box-shadow: ${state.box_shadow}; 
`;
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name == 'distance') {
      if (state.blure >= 50) {
        const diff = 100 - value;
        return setState({ ...state, [name]: value });
      }
      return setState({ ...state, [name]: value });
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const onChange_intensity = (e) => {
    const { name, value } = e.target;

    setState({ ...state, intensity: value / 100 });
  };
  const onspreadChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, spread: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, color: stat.input, backgroundColor: stat.input });
  };

  const onClick = (e) => {
    if (e.target.id == 2) {
      setState({ ...state, shape: e.target.id, backgroundColor: `linear-gradient(to ${state.current_direction}, ${state.shades[1]} ,${state.shades[0]})` });
    } else if (e.target.id == 3) {
      setState({ ...state, shape: e.target.id, backgroundColor: `linear-gradient(to ${state.current_direction}, ${state.shades[0]} ,${state.shades[1]})` });
    } else {
      setState({ ...state, shape: e.target.id, backgroundColor: state.color });
    }
  };
  const onCopy = () => {
    setState({ ...state, copied: true });
  };
  return (
    <Wrapper color={isDark(state.color)} dir_sign={dir_sign} state={state}>
      <form onSubmit={onSubmit}>
        <Input color={isDark(state.color)} dir_sign={dir_sign} state={state} onChange={(e) => setStat({ ...stat, input: e.target.value })} name='color' type='text' value={stat.input} />
        <button style={{ opacity: 0 }} type='submit'></button>
      </form>
      <div className='container'>
        <h2>Size</h2>
        <Slider name='size' min='0' max='410' value={state.size} onChange={onChange} />
      </div>
      <div className='container'>
        <h2>Radius</h2>
        <Slider name='radius' min='0' max='50' value={state.radius} onChange={onChange} />
      </div>
      <div className='container'>
        <h2>Distance</h2>
        <Slider name='distance' min='1' max='50' value={state.distance} onChange={onChange} />
      </div>
      <div className='container'>
        <h2>Intensity</h2>
        <Slider name='intensity' min='1' max='60' value={state.intensity * 100} onChange={onChange_intensity} />
      </div>
      <div className='container'>
        <h2>Blur</h2>
        <Slider type='range' name='blure' min='0' max='100' value={state.blure} onChange={onChange} />
      </div>
      <div className='container'>
        <h2>Spread</h2>
        <Slider type='range' name='spread' min='-50' max='50' value={state.spread} onChange={onspreadChange} />
      </div>
      <div className='buttons'>
        <Button onClick={onClick} id='1' btn_txt='Normal' box_shadow={state.box_shadow} color={state.color} />
        <Button onClick={onClick} id='2' btn_txt='curved inset' box_shadow={state.box_shadow} color={state.color} />
        <Button onClick={onClick} id='3' btn_txt='curved' box_shadow={state.box_shadow} color={state.color} />
        <Button onClick={onClick} id='4' btn_txt='inset' box_shadow={state.box_shadow} color={state.color} />
      </div>
      <div className='content'>
        <span>border-radius</span>: {state.radius}%; <br />
        <span>background</span>: {state.backgroundColor}; <br />
        <span>box-shadow</span>: {state.box_shadow}; <br />
        <div className='icon'>
          <CopyToClipboard text={text} onCopy={onCopy}>
            <Icon name='code' size='big' />
          </CopyToClipboard>
        </div>
      </div>
    </Wrapper>
  );
};

export default Component;
// background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
