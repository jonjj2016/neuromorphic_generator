import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from 'semantic-ui-react';
// import './style.css';

const Slider = (props) => {
  return (
    <Wrapper>
      <input id='mrange' type='range' {...props} />
    </Wrapper>
  );
};
const complexMixin = css``;
const Wrapper = styled.div`
  padding: 1rem 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  border-radius: 20px;
  /* background-color: #262626; */
  box-shadow: -7px -7px 12px rgba(0, 0, 0, 0.05), 7px 7px 12px rgba(0, 0, 0, 0.2);
  #mrange {
    background-color: transparent;
    -webkit-appearance: none;
    height: 10px;
    width: 100%;
    border-radius: 30px;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05), inset -1px -1px 5px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  #mrange::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 2rem;
    width: 2rem;
    background-color: #00ff55;
    border-radius: 50%;
    cursor: grab;
    box-shadow: inset -2px -2px 5px #009900, inset 2px 2px 5px #ccffcc;
  }
  input {
    /* border: none; */
  }

  input[type='range'] {
    /* width: 100%;
    -webkit-appearance: none; */
  }
  input[type='range']::-webkit-slider-runnable-track {
    /* width: 80%;
    height: 36px;
    cursor: pointer;
    outline: none;
    display: flex;
    border-radius: 15px;
    background-color: transparent;
    align-items: center;
    box-shadow: inset 7px 7px 25px #afafaf, inset -7px -7px 25px #ffffff; */
  }
  input[type='range']::-webkit-slider-thumb {
    /* width: 36px;
    height: 36px;
    background: #ffffff;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
    -webkit-appearance: none;
    background: linear-gradient(145deg, #ececec, #c7c7c7);
    box-shadow: 17px 17px 55px #afafaf, -17px -17px 55px #ffffff; */
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    /* border: none;
    outline: none; */
  }
  input[type='range']::-moz-range-track {
    background-color: transparent;
    -webkit-appearance: none;
    height: 10px;
    width: 100%;
    border-radius: 30px;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05), inset -1px -1px 5px rgba(0, 0, 0, 0.2);
    outline: none;
    /* background: #3071a9;
    border-radius: 1.3px;
    width: 100%;
    height: 8.4px;
    cursor: pointer; */
  }
  input[type='range']::-moz-range-thumb {
    -webkit-appearance: none;
    height: 2rem;
    width: 2rem;
    background-color: #00ff55;
    border-radius: 50%;
    cursor: grab;
    box-shadow: inset -2px -2px 5px #009900, inset 2px 2px 5px #ccffcc;
    /* width: 2rem;
    height: 2rem;
    background: #ffffff;
    border-radius: 100%;
    cursor: pointer; */
  }
  input[type='range']::-ms-track {
    /* background: transparent;

    border-width: 14.8px 0;
    color: transparent;
    width: 100%;
    border-radius: 10px;
    height: 8.4px;
    cursor: pointer; */
  }
  input[type='range']::-ms-fill-lower {
    /* background: #2a6495;
    border-radius: 2.6px; */
  }
  input[type='range']::-ms-fill-upper {
    /* background: #3071a9;
    border-radius: 2.6px; */
  }
  input[type='range']::-ms-thumb {
    /* width: 16px;
    height: 36px;
    background: #ffffff;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 0px; */
  }
  input[type='range']:focus::-ms-fill-lower {
  }
  input[type='range']:focus::-ms-fill-upper {
  }

  @supports (-ms-ime-align: auto) {
    /* input[type='range'] {
      margin: 0;
    } */
  }
`;
export default Slider;
