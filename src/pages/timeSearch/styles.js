import styled, { css } from "styled-components";

import Cloud from "../../assets/cloud.png";

import InputMask from "react-input-mask";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Cloud});
  background-repeat: no-repeat;
  background-size: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  position: relative;

  transition: all 0.3s ease 0s;
`;

export const WrapperInput = styled.div`
  width: 600px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid #000;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  ${({ hasValue }) =>
    hasValue &&
    css`
      border-color: blue;
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: red;
    `}

  svg {
    cursor: pointer;
  }
`;

export const InputCEP = styled(InputMask)`
  width: 80%;
  height: 100%;
  border: none;
  font-size: 21px;
`;

export const WrapperData = styled.div`
  display: flex;
  width: 600px;
  height: 300px;
  background-color: #000;
  opacity: 0.5;
  border-radius: 10px;

  padding: 25px;

  display: flex;
  flex-direction: column;
`;

export const Error = styled.div`
  color: red;
  font-size: 21px;
  line-height: 40px;

  position: absolute;
  top: 210px;
`;

export const Rows = styled.div`
  color: #fff;
  font-size: 21px;
  width: 100%;
  line-height: 40px;
`;
